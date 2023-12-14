Blockly.Python['program_begin'] = function(block) {
  Blockly.Python.definitions_['import'] = 'import msl' + '\n' + 'import time' + '\n' +'msl.waitForStart()' + '\n' + 'msl.setupToF(1)' + '\n' + 'msl.setupToF(2)' + '\n' + 'msl.resetEncoder(1234)' + '\n' + 'msl.setEnableMotors()' +'\n'; // forces statement to top of code generator
  var code = '\n';
  return code;
};


Blockly.Python['program_end'] = function(block) {
  var code = 'msl.endProgram()' + '\n';
  return code;
};

Blockly.Python['buttons_status'] = function(block) {
  var dropdown_button = block.getFieldValue('button');
  var code = 'msl.getButtonStatus(' + "'" + dropdown_button + "'" + ')';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['motor_set_power'] = function(block) {
  var dropdown_motor = block.getFieldValue('motor');
  var value_power = Blockly.Python.valueToCode(block, 'power', Blockly.Python.ORDER_ATOMIC);
  var code = 'msl.setMotorPower(' + dropdown_motor + ',' + value_power + ')' + '\n';
  return code;
};


Blockly.Python['motor_set_speed'] = function(block) {
  var dropdown_motor = block.getFieldValue('motor');
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var code = 'msl.setMotorSpeed(' + dropdown_motor + ',' + value_speed + ')' + '\n';
  return code;
};


Blockly.Python['motor_set_powers'] = function(block) {
  var value_power_1 = Blockly.Python.valueToCode(block, 'power_1', Blockly.Python.ORDER_ATOMIC);
  var value_power_2 = Blockly.Python.valueToCode(block, 'power_2', Blockly.Python.ORDER_ATOMIC);
  var value_power_3 = Blockly.Python.valueToCode(block, 'power_3', Blockly.Python.ORDER_ATOMIC);
  var value_power_4 = Blockly.Python.valueToCode(block, 'power_4', Blockly.Python.ORDER_ATOMIC);
  var code = 'msl.setMotorPowers(' + value_power_1 + ',' + value_power_2 + ',' + value_power_3 + ',' + value_power_4 + ')' + '\n';
  return code;
};


Blockly.Python['motor_set_speeds'] = function(block) {
  var value_speed_1 = Blockly.Python.valueToCode(block, 'speed_1', Blockly.Python.ORDER_ATOMIC);
  var value_speed_2 = Blockly.Python.valueToCode(block, 'speed_2', Blockly.Python.ORDER_ATOMIC);
  var value_speed_3 = Blockly.Python.valueToCode(block, 'speed_3', Blockly.Python.ORDER_ATOMIC);
  var value_speed_4 = Blockly.Python.valueToCode(block, 'speed_4', Blockly.Python.ORDER_ATOMIC);
  var code = 'msl.setMotorSpeeds(' + value_speed_1 + ',' + value_speed_2 + ',' + value_speed_3 + ',' + value_speed_4 + ')' + '\n';
  return code;
};

Blockly.Python['motor_rotate_degrees'] = function(block) {
  var dropdown_motor = block.getFieldValue('motor');
  var value_degrees = Blockly.Python.valueToCode(block, 'degrees', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var code = 'msl.setMotorDegree(' + dropdown_motor + ',' + value_speed + ',' + value_degrees + ')' + '\n';
  return code;
};

Blockly.Python['motor_rotate_target'] = function(block) {
  var dropdown_motor = block.getFieldValue('motor');
  var value_count = Blockly.Python.valueToCode(block, 'count', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var code = 'msl.setMotorTarget(' + dropdown_motor + ',' + value_speed + ',' + value_count + ')' + '\n';
  return code;
};

Blockly.Python['motor_stop'] = function(block) {
  var dropdown_motor = block.getFieldValue('motor');
  var dropdown_brake = block.getFieldValue('brake');
  if (dropdown_brake === "brake"){
    var code = 'msl.setMotorStop(' + dropdown_motor + ',' + "'brake'" + ')' + '\n';
    return code;
  }else{
    var code = 'msl.setMotorStop(' + dropdown_motor + ',' + "'no brake'" + ')' + '\n';
    return code;
  }
};

Blockly.Python['motor_busy'] = function(block) {
  var dropdown_motor = block.getFieldValue('motor');
  var code = 'msl.getMotorBusy(' + dropdown_motor + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['set_motor_invert'] = function(block) {
  var dropdown_motor = block.getFieldValue('motor');
  var dropdown_invert = block.getFieldValue('invert');
  var code = 'msl.setMotorInvert(' + dropdown_motor + ',' + "'" + dropdown_invert + "'" + ')'  + '\n';
  return code;
};

Blockly.Python['servo_set_speed'] = function(block) {
  var dropdown_servo = block.getFieldValue('servo');
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var code = 'msl.setServoSpeed(' + dropdown_servo + ',' + value_speed + ')' + '\n';
  return code;
};

Blockly.Python['servo_set_speeds'] = function(block) {
  var value_speed_1 = Blockly.Python.valueToCode(block, 'speed_1', Blockly.Python.ORDER_ATOMIC);
  var value_speed_2 = Blockly.Python.valueToCode(block, 'speed_2', Blockly.Python.ORDER_ATOMIC);
  var value_speed_3 = Blockly.Python.valueToCode(block, 'speed_3', Blockly.Python.ORDER_ATOMIC);
  var value_speed_4 = Blockly.Python.valueToCode(block, 'speed_4', Blockly.Python.ORDER_ATOMIC);
  var code = 'msl.setServoSpeeds(' + value_speed_1 + ',' + value_speed_2 + ',' + value_speed_3 + ',' + value_speed_4 + ')' + '\n';
  return code;
};


Blockly.Python['servo_set_position'] = function(block) {
  var dropdown_servo = block.getFieldValue('servo');
  var value_position = Blockly.Python.valueToCode(block, 'position', Blockly.Python.ORDER_ATOMIC);
  var code = 'msl.setServoPosition(' + dropdown_servo + ',' + value_position + ')' + '\n';
  return code;
};


Blockly.Python['servo_set_positions'] = function(block) {
  var value_position_1 = Blockly.Python.valueToCode(block, 'position_1', Blockly.Python.ORDER_ATOMIC);
  var value_position_2 = Blockly.Python.valueToCode(block, 'position_2', Blockly.Python.ORDER_ATOMIC);
  var value_position_3 = Blockly.Python.valueToCode(block, 'position_3', Blockly.Python.ORDER_ATOMIC);
  var value_position_4 = Blockly.Python.valueToCode(block, 'position_4', Blockly.Python.ORDER_ATOMIC);
  var code = 'msl.setServoPositions(' + value_position_1 + ',' + value_position_2 + ',' + value_position_3 + ',' + value_position_4 + ')' + '\n';
  return code;
};

Blockly.Python['get_servo_position'] = function(block) {
  var dropdown_servo = block.getFieldValue('servo');
  var code = 'msl.getServoPosition(' + dropdown_servo + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['set_servo_invert'] = function(block) {
  var dropdown_servo = block.getFieldValue('servo');
  var dropdown_invert = block.getFieldValue('invert');
  var code = 'msl.setServoInvert(' + dropdown_servo + ',' + dropdown_invert + ')\n';
  return code;
};

Blockly.Python['set_drive_speed'] = function(block) {
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var code = 'msl.setDriveSpeed(' + value_speed + ')\n';
  return code;
};

Blockly.Python['start_driving'] = function(block) {
  var dropdown_action = block.getFieldValue('action');
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var code = 'msl.setDriveSpeed(' + "'" + dropdown_action + "'" + ',' + value_speed + ')\n';
  return code;
};

Blockly.Python['spin_turn'] = function(block) {
  var dropdown_action = block.getFieldValue('action');
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_degrees = Blockly.Python.valueToCode(block, 'degrees', Blockly.Python.ORDER_ATOMIC);
  var checkbox_wait = block.getFieldValue('wait') === 'TRUE'
  var set_wait;
  if (checkbox_wait === true){
    set_wait = "True";
  } else {
    set_wait = "False";
  }
  var code = 'msl.setSpinDegrees(' + "'" + dropdown_action + "'" + ',' + value_speed + ',' + value_degrees + ',' + set_wait + ')\n';
  return code;
};

Blockly.Python['pivot_turn'] = function(block) {
  var dropdown_action = block.getFieldValue('action');
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_degrees = Blockly.Python.valueToCode(block, 'degrees', Blockly.Python.ORDER_ATOMIC);
  var checkbox_wait = block.getFieldValue('wait') === 'TRUE';
  var set_wait;
  if (checkbox_wait === true){
    set_wait = "True";
  } else {
    set_wait = "False";
  }
  var code = 'msl.setPivotDegrees(' + "'" + dropdown_action + "'" + ',' + value_speed + ',' + value_degrees + ',' + set_wait + ')\n';
  return code;
};

Blockly.Python['drive_distance'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_distance = Blockly.Python.valueToCode(block, 'distance', Blockly.Python.ORDER_ATOMIC);
  var checkbox_wait = block.getFieldValue('wait') === 'TRUE';
  var set_wait;
  if (checkbox_wait === true){
    set_wait = "True";
  } else {
    set_wait = "False";
  }
  var code = 'msl.setDriveDistance(' + "'" + dropdown_direction + "'" + ',' + value_speed + ',' + value_distance + ',' + set_wait + ')\n';
  return code;
};

Blockly.Python['drive_steering'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var value_speedl = Blockly.Python.valueToCode(block, 'speedL', Blockly.Python.ORDER_ATOMIC);
  var value_speedr = Blockly.Python.valueToCode(block, 'speedR', Blockly.Python.ORDER_ATOMIC);
  var code = 'msl.setDriveSpeeds(' + "'" + dropdown_direction + "'" + ',' + value_speedl + ',' + value_speedr + ')\n';
  return code;
};

Blockly.Python['stop_driving'] = function(block) {
  var code = 'msl.setDriveStop()' + '\n';
  return code;
};

Blockly.Python['set_drive_invert'] = function(block) {
  var dropdown_invert = block.getFieldValue('invert');
  var code = 'msl.setDriveInvert(' + dropdown_invert + ')' + '\n';
  return code;
};

Blockly.Python['delay'] = function(block) {
  var number_name = block.getFieldValue('NAME');
  var code = 'time.sleep(' + number_name + ')\n';
  return code;
};

Blockly.Python['get_encoder'] = function(block) {
  var dropdown_encoder = block.getFieldValue('encoder');
  var code = 'msl.getEncoderCount(' + dropdown_encoder + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_lidar'] = function(block) {
  var dropdown_value = block.getFieldValue('value');
  var code = 'msl.getToFSensor(' + dropdown_value + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['reset_encoders'] = function(block) {
  var dropdown_encoder = block.getFieldValue('encoder');
  var code = 'msl.resetEncoder(' + dropdown_encoder + ')\n';
  return code;
};







Blockly.Python['pixel_animate'] = function(block) {
  var dropdown_animation = block.getFieldValue('animation');
  var number_seconds = block.getFieldValue('seconds');
  var code = 'msl.setPixelAnimation(' + "'" + dropdown_animation + "'" + ','  + number_seconds + ')\n';
  return code;
};

Blockly.Python['pixel_blink'] = function(block) {
  var dropdown_pixel = block.getFieldValue('pixel');
  var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var value_times = Blockly.Python.valueToCode(block, 'times', Blockly.Python.ORDER_ATOMIC);
  var color1 = value_color;
  var re = /[0-9A-Fa-f]{6}/g;
  var inputString = color1;
  if(re.test(inputString)) {  // check to see if it's hex format color
      var code = 'msl.setPixelBlink(' + dropdown_pixel + ','  +  value_color + ',' + value_times + ')\n';
  } else {                    // non hex format (random color picker)
      var code = 'msl.setPixelBlink(' + dropdown_pixel + ','  + value_color + ',' + value_times + ')\n';
  }
  re.lastIndex = 0; // be sure to reset the index after using .text()
  return code;
};



Blockly.Python['pixel_color'] = function(block) {
  var dropdown_pixel = block.getFieldValue('pixel');
  var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var value_brightness = Blockly.Python.valueToCode(block, 'brightness', Blockly.Python.ORDER_ATOMIC);
  value_brightness = value_brightness.replace(/\(|\)/g, '');    // strips parenthesis out of negative string
//  value_brightness = parseInt(value_brightness);
//  value_brightness = Math.abs(value_brightness);
  var color1 = value_color;
  var re = /[0-9A-Fa-f]{6}/g;
  var inputString = color1;
  if(re.test(inputString)) {  // check to see if it's hex format color
      var code = 'msl.setPixelColor(' + dropdown_pixel + ','  +  value_color + ',' + value_brightness + ')\n';
  } else {                    // non hex format (random color picker)
      var code = 'msl.setPixelColor(' + dropdown_pixel + ','  + value_color + ',' + value_brightness + ')\n';
  }
  re.lastIndex = 0; // be sure to reset the index after using .text()
  return code;
};

Blockly.Python['pixels_off'] = function(block) {
  var dropdown_pixel = block.getFieldValue('pixel');
  var code = 'msl.setPixelOff(' + dropdown_pixel + ')\n';
  return code;
};

Blockly.Python['color_random'] = function(block) {
  var code = "'#%06x' % msl.random.randint(0, 2**24 - 1)";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['color_picker'] = function(block) {
  var colour_color = block.getFieldValue('color');
  var code = "'" + colour_color + "'";
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['sound_tone'] = function(block) {
  var value_tone = Blockly.Python.valueToCode(block, 'tone', Blockly.Python.ORDER_ATOMIC);
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  var checkbox_checked = block.getFieldValue('checked') === 'TRUE';
  if(checkbox_checked){value_time = 0;} //if checked, play continuosly
  var code = 'msl.setTone(' + value_tone + ','  +  value_time + ')\n';
  return code;
};

Blockly.Python['sound_stop'] = function(block) {
  var code = 'msl.setSoundOff()\n';
  return code;
};

Blockly.Python['sound_note'] = function(block) {
  var dropdown_note = block.getFieldValue('note');
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  var checkbox_checked = block.getFieldValue('checked') === 'TRUE';
  if(checkbox_checked){value_time = 0;} //if checked, play continuosly
  var code = 'msl.setNote(' + 'msl.' + dropdown_note + ','  +  value_time + ')\n';
  return code;
};

Blockly.Python['sound_effect'] = function(block) {
  var dropdown_effect = block.getFieldValue('effect');
  var code = 'msl.setSoundEffect(' + "'" + dropdown_effect + "'" + ')\n';
  return code;
};

Blockly.Python['controls_loop_forever'] = function(block) {
  var statements_do = Blockly.Python.statementToCode(block, 'do');
  let branch = Blockly.Python.statementToCode(block, 'do');
  branch = Blockly.Python.addLoopTrap(branch, block) || Blockly.Python.PASS;
  var code = 'while True:\n' + branch;
  return code;
};
