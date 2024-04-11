// MSCS ESP32 S3 Bluetooth LE REPL module (BETA)
// Paul W. Uttley
// 12/01/23
// Enables Bluetooth connection to MicroPython REPL of ESP32 S3 module


'use strict';

// Use Nordic UART Bluetooth Services - seems to work OK
const NUS_SERVICE_UUID      = '6e400001-b5a3-f393-e0a9-e50e24dcca9e';
const NUS_CHARACTERISTIC_TX = '6e400002-b5a3-f393-e0a9-e50e24dcca9e';
const NUS_CHARACTERISTIC_RX = '6e400003-b5a3-f393-e0a9-e50e24dcca9e';
const DEVICE_BT_NAME_PREFIX = 'SEEKER';

var device = null;
var nusTx = null;
var nusRx = null;
var sendBuf = '';
var sendInProgress = false;
var devices = JSON.parse(localStorage.apps_nus_devices || '{}');


async function sendCodeBT(code_){
  let code = code_ == undefined ? Blockly.Python.workspaceToCode(Code.workspace) : code_;
  if (device){
  if (code) {
      window.alert("Press OK to upload code using Bluetooth.")
      code = code.replace(/\n/g, "\r");
      code+='\r\r'; //Snek workaround
      code = "code=r'''" + code  + "'''";
    //  serialWrite('\x05${code}\x04');
    send('\r\r');
    for (let i = 1; i <= 25; i++) {   //send several code interrupts
      send('\x03');
      await sleepNow(2);  // 2ms pause
    }

    send('\r');
    send('\x05');         // enter paste mode
    send(`${code}`);      // paste the code over BT
    send('\x04');         // exit paste mode
    send('\r');
    var savePY = "with open('main.py','w') as f: f.write(code)"; // ++ MicroPython -- save code to file
    savePY += '\r\r';
    send(savePY);
    send('\r');
    await sleepNow(100);  // 100ms pause to wait for save complete before run
    var runPY = ("exec(open('main.py').read())");  // run the code with a terminal command -- won't knock off BT connection
    runPY += '\r\r';
    send(runPY);
    send('\r');

  }else{
    window.alert("No code in the workspace to upload.");
  }
}else{
    window.alert("Robot is not connected to Bluetooth.");
}

}


function onScanResult(newDevice) {
  device = newDevice;
  if (device.connected) {
    console.log('already connected to BT!');
    onDevice();
  } else {
    device.gatt.connect().then(function() {
      onDevice();
    }).catch(function(e) {
      console.warn('failed to connect to BT:', e);
      disconnect();
    });
  }
}

function onDevice() {
  if (!(device.id in devices)) {
    devices[device.id] = {};
  }
  device.gatt.getPrimaryService(NUS_SERVICE_UUID).then(function(service) {
    service.getCharacteristics().then(function(characteristics) {
      for (let c of characteristics) {
        if (c.uuid == NUS_CHARACTERISTIC_TX) {
          nusTx = c;
        } else if (c.uuid == NUS_CHARACTERISTIC_RX) {
          nusRx = c;
        }
      }
      if (nusTx !== null && nusRx !== null) {
        nusRx.addEventListener('characteristicvaluechanged', onRx);
        nusRx.startNotifications().then(function() {
          onConnected();
        }).catch(function(e) {
          console.error('cannot enable notifications:', e);
          disconnect();
        });
      } else {
        console.error('failed to find tx and rx, characteristics:', characteristics);
        disconnect();
      }
    }).catch(function(e) {
      console.error('failed to retrieve characteristics:', e);
      disconnect();
    });
  }).catch(function(e) {
    console.error('failed to get service:', e);
    disconnect();
  });

  device.addEventListener('gattserverdisconnected', function(e) {
    console.warn('disconnected from Bluetooth:', e);
    disconnect();
  });
}


async function connect() {
  if (device && device.gatt.connected) {
    return; // already connected
  }
  if (device !== null) {
    onScanResult(device);
    return;
  }
  navigator.bluetooth.requestDevice({

    //filters:[{namePrefix: [DEVICE_BT_NAME_PREFIX]},],

      acceptAllDevices:true,
      optionalServices: [NUS_SERVICE_UUID]

  }).then(onScanResult).catch(function(e) {
    console.warn('failed to find a device:', e);
    disconnect();
  });

}

function onConnected() {
    console.log('connected to Bluetooth!')
  //  To do: we need a 'connected' visual indicator
  document.getElementById('BTConnectButton').style.color = '#00ffff'; // blue
  document.getElementById('BTConnectButton').innerText = "BT connected";
  document.getElementById('SendBTUploadCode').style.color = '#fff';   // white
}

async function disconnect() {
  if (nusRx !== null) {
    console.log('remove event'); // TODO
    document.getElementById('BTConnectButton').style.color = '#FF3393';   // Magenta
    document.getElementById('BTConnectButton').innerText = "Connect BT";
    document.getElementById('SendBTUploadCode').style.color = '#817F86';   // gray
    //nusRx.removeEventListener('characteristicvaluechanged', onRx);
    setTimeout(connect(), 500);  // Try and automatically reconnect if disconnected
  }
  if (device !== null) {
    device.gatt.disconnect();
  }

}

function onRx(e) {
//  console.log('receiving data')
  let decoder = new TextDecoder(); // utf-8 decoder
  let data = new Uint8Array(nusRx.value.buffer);
  console.log('onRx:', data, decoder.decode(data));
  term.write(decoder.decode(data));
}

function send(value) {
  sendBuf += value;
  if (nusRx === null || !sendBuf || sendInProgress) {
    return;
  }

  // Delay a bit so send() may be called multiple times without generating many
  // packets.
  sendInProgress = true; // To do: Need a send in progress indicator
  console.log('Send In Progress...');
  setTimeout(doSend, 1);
}

function doSend() {
  var encoder = new TextEncoder(); // encode as utf-8

  // Make sure utf-8 chars can be encoded
  var chunk;
  var buf;
  for (let i=20; i!=0; i--) {
    chunk = sendBuf.substr(0, i);
    buf = encoder.encode(chunk);
    if (buf.length <= 20) {
      // found a working chunk
      break;
    }
  }

  console.log('send:', [chunk, buf]);
  nusTx.writeValue(buf).then(function() {
    sendInProgress = false;
    console.log('Send Complete...');
    sendBuf = sendBuf.substr(chunk.length);
    send('');
  }).catch(function(e) {
    sendInProgress = false;
    console.log('Send Error...');
    console.warn('Could not send value:', e);
    setTimeout(function() { send(''); }, 5);
  });
}
