
Blockly.Python['move_distance'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var value_distance = Blockly.Python.valueToCode(block, 'distance', Blockly.Python.ORDER_ATOMIC);
  value_distance = value_distance.replace(/\(|\)/g, '');    // strips parenthesis out of negative string
    if(!isNaN(value_distance)){
      //  console.log('It is a number');
        value_distance = parseInt(value_distance);               // integers only
        value_distance = Math.abs(value_distance);               // ABS value
      }
      else {
      //  console.log('It is not a number');
      }
  var code = 'LUMA.move_distance(' + '"'+ dropdown_direction + '"' + ',' + value_distance + ')\n';
  return code;
};

Blockly.Python['move_start'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  // TODO: Assemble Python into code variable.
  var code = 'LUMA.move_start(' + '"' + dropdown_direction + '"' + ')\n';
  return code;
};

Blockly.Python['move_stop'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'LUMA.move_stop()\n';
  return code;
};

Blockly.Python['move_speed'] = function(block) {
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  value_speed = value_speed.replace(/\(|\)/g, '');    // strips parenthesis out of negative string
  if(!isNaN(value_speed)){
    //  console.log('It is a number');
      value_speed = parseInt(value_speed);               // integers only
      value_speed = Math.abs(value_speed);               // ABS value
    }
    else {
    //  console.log('It is not a number');
    }
  var code = 'LUMA.set_move_speed(' + value_speed + ')\n';
  return code;
};

Blockly.Python['move_spin'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var value_degrees = Blockly.Python.valueToCode(block, 'degrees', Blockly.Python.ORDER_ATOMIC);
  value_degrees = value_degrees.replace(/\(|\)/g, '');    // strips parenthesis out of negative string
  if(!isNaN(value_degrees)){
    //  console.log('It is a number');
      value_degrees = parseInt(value_degrees);             // integers only
      value_degrees = Math.abs(value_degrees);             // ABS value
    }
    else {
    //  console.log('It is not a number');
    }
  var code = 'LUMA.move_spin(' + '"' + dropdown_direction + '"' + ',' + value_degrees +')\n';
  return code;
};


Blockly.Python['move_pivot'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var value_degrees = Blockly.Python.valueToCode(block, 'degrees', Blockly.Python.ORDER_ATOMIC);
  value_degrees = value_degrees.replace(/\(|\)/g, '');    // strips parenthesis out of negative string
  if(!isNaN(value_degrees)){
    //  console.log('It is a number');
      value_degrees = parseInt(value_degrees);             // integers only
      value_degrees = Math.abs(value_degrees);             // ABS value
    }
    else {
    //  console.log('It is not a number');
    }
  var code = 'LUMA.move_pivot(' + '"' + dropdown_direction + '"' + ',' + value_degrees +')\n';
  return code;
};


Blockly.Python['move_steering'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var value_left_speed = Blockly.Python.valueToCode(block, 'left speed', Blockly.Python.ORDER_ATOMIC);
  var value_right_speed = Blockly.Python.valueToCode(block, 'right speed', Blockly.Python.ORDER_ATOMIC);

  value_left_speed = value_left_speed.replace(/\(|\)/g, '');      // strips parenthesis out of negative string
  value_right_speed = value_right_speed.replace(/\(|\)/g, '');    // strips parenthesis out of negative string
  if(!isNaN(value_left_speed)){
    //  console.log('It is a number');
      value_left_speed = parseInt(value_left_speed);             // integers only
      value_left_speed = Math.abs(value_left_speed);             // ABS value
    }
    else {
    //  console.log('It is not a number');
    }
  if(!isNaN(value_right_speed)){
    //  console.log('It is a number');
      value_right_speed = parseInt(value_right_speed);         // integers only
      value_right_speed = Math.abs(value_right_speed);         // ABS value
    }
    else {
    //  console.log('It is not a number');
    }
  var code = 'LUMA.move_steering(' + '"' + dropdown_direction + '"' + ',' + value_left_speed + ',' + value_right_speed + ')\n';
  return code;
};


Blockly.Python['move_servo'] = function(block) {
  var dropdown_motor = block.getFieldValue('motor');
  var value_position = Blockly.Python.valueToCode(block, 'position', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);

  value_position = value_position.replace(/\(|\)/g, '');    // strips parenthesis out of negative string
  if(!isNaN(value_position)){
    //  console.log('It is a number');
      value_position = parseInt(value_position);         // integers only
      value_position = Math.abs(value_position);         // ABS value
    }
    else {
    //  console.log('It is not a number');
    }

  value_speed = value_speed.replace(/\(|\)/g, '');    // strips parenthesis out of negative string
  if(!isNaN(value_speed)){
    //  console.log('It is a number');
      value_speed = parseInt(value_speed);         // integers only
      value_speed = Math.abs(value_speed);         // ABS value
    }
    else {
    //  console.log('It is not a number');
    }
  var code = 'LUMA.move_servo(' + '"' + dropdown_motor + '"' + ',' + value_position + ',' + value_speed + ')\n';
  return code;
};

Blockly.Python['event_wait_for_start'] = function(block) {
  // TODO: Assemble Python into code variable.
  //var code = 'from SideKick import *\n' + 'wait_for_start()\n';
  Blockly.Python.definitions_['import LUMA'] = 'import LUMA as LUMA'; // forces statement to top of code generator
  //var code = 'LUMA.wait_for_start()' + '\n';
  var code = '\n';
  return code;
};
Blockly.Python['event_end_program'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'LUMA.reboot()\n';
  return code;
};


Blockly.Python['event_green_button'] = function(block) {
  var dropdown_state = block.getFieldValue('state');
  // TODO: Assemble Python into code variable.
  var code = 'LUMA.green_button(' + '"' + dropdown_state + '"' + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['event_gray_button'] = function(block) {
  var dropdown_state = block.getFieldValue('state');
  // TODO: Assemble Python into code variable.
  var code = 'LUMA.black_button(' + '"' + dropdown_state + '"' + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensor_ultrasonic'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'LUMA.ultrasonic_distance()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensor_line'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'LUMA.reflected_light_sensor()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['delay'] = function(block) {
  var number_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'LUMA.time.sleep(' + number_name + ')\n';
  return code;
};

Blockly.Python['pixel_animate'] = function(block) {
  var dropdown_animation = 'LUMA.' + block.getFieldValue('animation');
  var number_seconds = block.getFieldValue('seconds');
  // TODO: Assemble Python into code variable.
  var code = 'LUMA.show_pixel_animation(' + dropdown_animation + ','  + number_seconds + ')\n';
  return code;
};

Blockly.Python['pixel_blink'] = function(block) {
  var dropdown_pixel = block.getFieldValue('pixel');
  var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var value_times = Blockly.Python.valueToCode(block, 'times', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var color1 = value_color;
  var re = /[0-9A-Fa-f]{6}/g;
  var inputString = color1;
  if(re.test(inputString)) {  // check to see if it's hex format color
      var code = 'LUMA.blink_pixel(' + '"' + dropdown_pixel + '"' + ','  +  value_color + ',' + value_times + ')\n';
  } else {                    // non hex format (random color picker)
      var code = 'LUMA.blink_pixel(' + '"' + dropdown_pixel + '"' + ','  + value_color + ',' + value_times + ')\n';
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
      var code = 'LUMA.set_pixel(' + '"' + dropdown_pixel + '"' + ','  +  value_color + ',' + value_brightness + ')\n';
  } else {                    // non hex format (random color picker)
      var code = 'LUMA.set_pixel(' + '"' + dropdown_pixel + '"' + ','  + value_color + ',' + value_brightness + ')\n';
  }
  re.lastIndex = 0; // be sure to reset the index after using .text()
  return code;
};

Blockly.Python['pixels_off'] = function(block) {
  var dropdown_pixel = block.getFieldValue('pixel');
  var value_color = "'#000000'"; // set to off color
  var value_brightness = 0;      // set brighntess to zero
  // TODO: Assemble Python into code variable.
  var code = 'LUMA.set_pixel(' + '"' + dropdown_pixel + '"' + ','  + value_color + ',' + value_brightness + ')\n';
  return code;
};

Blockly.Python['color_random'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = "'#%06x' % LUMA.random.randint(0, 2**24 - 1)";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['color_picker'] = function(block) {
  var colour_color = block.getFieldValue('color');
  // TODO: Assemble Python into code variable.
  var code = "'" + colour_color + "'";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['sound_tone'] = function(block) {
  var value_tone = Blockly.Python.valueToCode(block, 'tone', Blockly.Python.ORDER_ATOMIC);
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  var checkbox_checked = block.getFieldValue('checked') === 'TRUE';
  // TODO: Assemble Python into code variable.
  if(checkbox_checked){value_time = 0;} //if checked, play continuosly
  var code = 'LUMA.play_tone(' + value_tone + ','  +  value_time + ')\n';
  return code;
};



Blockly.Python['sound_stop'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'LUMA.sound_off()\n';
  return code;
};

Blockly.Python['sound_note'] = function(block) {
  var dropdown_note = block.getFieldValue('note');
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  var checkbox_checked = block.getFieldValue('checked') === 'TRUE';
  // TODO: Assemble Python into code variable.
  if(checkbox_checked){value_time = 0;} //if checked, play continuosly
  var code = 'LUMA.play_note(' + 'LUMA.' + dropdown_note + ','  +  value_time + ')\n';
  return code;
};

Blockly.Python['sound_effect'] = function(block) {
  var dropdown_effect = block.getFieldValue('effect');
  // TODO: Assemble Python into code variable.
  var code = 'LUMA.play_sound_effect(' + "'" + dropdown_effect + "'" + ')\n';
  return code;
};

Blockly.Python['controls_loop_forever'] = function(block) {
  var statements_do = Blockly.Python.statementToCode(block, 'do');
  let branch = Blockly.Python.statementToCode(block, 'do');
  branch = Blockly.Python.addLoopTrap(branch, block) || Blockly.Python.PASS;
  var code = 'while True:\n' + branch;
  return code;
};
