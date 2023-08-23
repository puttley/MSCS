Blockly.Blocks['program_end'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("program end");
    this.setPreviousStatement(true, null);
    this.setColour('#eea011');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['program_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("program start");
    this.setNextStatement(true, null);
    this.setColour('#eea011');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['button_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["start","start"], ["up","up"], ["down","down"], ["right","right"], ["left","left"]]), "button")
        .appendField("button is")
        .appendField(new Blockly.FieldDropdown([["pressed","true"], ["unpressed","false"]]), "state");
    this.setOutput(true, null);
    this.setColour('#eea011');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['buttons_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["start","start"], ["a","a"], ["b","b"], ["c","c"], ["d","d"]]), "button")
        .appendField("button is pressed");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#eea011');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_set_power'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["1234","1234"]]), "motor")
        .appendField("set power to");
    this.appendValueInput("power")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#587081');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['motor_set_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["1234","1234"]]), "motor")
        .appendField("set speed to");
    this.appendValueInput("speed")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#587081');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['motor_set_powers'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor | set powers to");
    this.appendValueInput("power_1")
        .setCheck("Number")
        .appendField("1");
    this.appendValueInput("power_2")
        .setCheck("Number")
        .appendField("2");
    this.appendValueInput("power_3")
        .setCheck("Number")
        .appendField("3");
    this.appendValueInput("power_4")
        .setCheck("Number")
        .appendField("4");
    this.appendDummyInput()
        .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#587081');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_set_speeds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor | set speeds to");
    this.appendValueInput("speed_1")
        .setCheck("Number")
        .appendField("1");
    this.appendValueInput("speed_2")
        .setCheck("Number")
        .appendField("2");
    this.appendValueInput("speed_3")
        .setCheck("Number")
        .appendField("3");
    this.appendValueInput("speed_4")
        .setCheck("Number")
        .appendField("4");
    this.appendDummyInput()
        .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#587081');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['motor_rotate_degrees'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["1234","1234"]]), "motor")
        .appendField("rotate at");
    this.appendValueInput("speed")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("% speed");
    this.appendValueInput("degrees")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#587081');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['motor_rotate_target'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["1234","1234"]]), "motor")
        .appendField("rotate at");
    this.appendValueInput("speed")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("% speed to encoder count");
    this.appendValueInput("count")
        .setCheck("Number");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#587081');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["1234","1234"]]), "motor");
    this.appendDummyInput()
        .appendField("stop with")
        .appendField(new Blockly.FieldDropdown([["no brake","no brake"], ["brake","brake"]]), "brake");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#587081');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_busy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "motor");
    this.appendDummyInput()
        .appendField("busy ?");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#587081');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['set_motor_invert'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "motor");
    this.appendDummyInput()
        .appendField("invert direction")
        .appendField(new Blockly.FieldDropdown([["true","true"], ["false","false"]]), "invert");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#587081');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['servo_set_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("servo")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["1234","1234"]]), "servo")
        .appendField("set speed to");
    this.appendValueInput("speed")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#C75052");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['servo_set_speeds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("servo | set speeds to");
    this.appendValueInput("speed_1")
        .setCheck("Number")
        .appendField("1");
    this.appendValueInput("speed_2")
        .setCheck("Number")
        .appendField("2");
    this.appendValueInput("speed_3")
        .setCheck("Number")
        .appendField("3");
    this.appendValueInput("speed_4")
        .setCheck("Number")
        .appendField("4");
    this.appendDummyInput()
        .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#C75052");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['servo_set_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("servo")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["1234","1234"]]), "servo")
        .appendField("set position to");
    this.appendValueInput("position")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#C75052");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['servo_set_positions'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("servo | set positions to");
    this.appendValueInput("position_1")
        .setCheck("Number")
        .appendField("1");
    this.appendValueInput("position_2")
        .setCheck("Number")
        .appendField("2");
    this.appendValueInput("position_3")
        .setCheck("Number")
        .appendField("3");
    this.appendValueInput("position_4")
        .setCheck("Number")
        .appendField("4");
    this.appendDummyInput()
        .appendField("degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#C75052");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_servo_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get servo")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "servo")
        .appendField("position");
    this.setOutput(true, null);
    this.setColour("#C75052");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['set_servo_invert'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("servo")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "servo");
    this.appendDummyInput()
        .appendField("invert direction")
        .appendField(new Blockly.FieldDropdown([["true","true"], ["false","false"]]), "invert");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#C75052");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['set_drive_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set drive speed to");
    this.appendValueInput("speed")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['start_driving'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("start driving")
        .appendField(new Blockly.FieldDropdown([["forward","forward"], ["reverse","reverse"], ["pivot right","pivotR"], ["pivot left","pivotL"], ["spin right","spinR"], ["spin left","spinL"]]), "action");
    this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("at");
    this.appendDummyInput()
        .appendField("% speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['spin_turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("spin")
        .appendField(new Blockly.FieldDropdown([["right","right"], ["left","left"]]), "action");
    this.appendValueInput("degrees")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pivot_turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pivot")
        .appendField(new Blockly.FieldDropdown([["right","right"], ["left","left"]]), "action");
    this.appendValueInput("degrees")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['drive_distance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("drive")
        .appendField(new Blockly.FieldDropdown([["forward","forward"], ["reverse","reverse"]]), "direction");
    this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("at");
    this.appendValueInput("distance")
        .setCheck(null)
        .appendField("% speed for");
    this.appendDummyInput()
        .appendField("cm");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['drive_steering'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("start driving")
        .appendField(new Blockly.FieldDropdown([["forward","forward"], ["reverse","reverse"]]), "direction");
    this.appendValueInput("speedL")
        .setCheck("Number")
        .appendField("left speed %");
    this.appendValueInput("speedR")
        .setCheck("Number")
        .appendField("right speed %");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['stop_driving'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("stop driving");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_encoder'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("encoder")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "encoder")
        .appendField("count");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_lidar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ToF sensor")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['reset_encoders'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("reset encoder")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["1234","1234"]]), "encoder");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['delay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wait for");
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0, 0, Infinity, 0.01), "NAME");
    this.appendDummyInput()
        .appendField("seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#eea011");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pixel_animate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("show")
        .appendField(new Blockly.FieldDropdown([["rainbow","rainbow"], ["comet","comet"], ["chase","chase"], ["fade","fade"], ["sparkle","sparkle"], ["color cycle","colorcycle"], ["sparkle fade","sparkle_fade"], ["rainbow comet","rainbow_comet"], ["rainbow chase","rainbow_chase"], ["rainbow sparkle","rainbow_sparkle"]]), "animation")
        .appendField("animation for");
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(2, 0), "seconds")
        .appendField("seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#891813");
 this.setTooltip("Show an animation pattern for number of seconds");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pixel_blink'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("blink pixel")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["1234","1234"]]), "pixel")
        .appendField("with");
    this.appendValueInput("color")
        .setCheck("Colour");
    this.appendDummyInput()
        .appendField("color");
    this.appendValueInput("times")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("times");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#891813");
 this.setTooltip("Blink the pixels(s) with a color 'x' number of times");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['pixel_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set pixel")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["1234","1234"]]), "pixel")
        .appendField("to");
    this.appendValueInput("color")
        .setCheck("Colour");
    this.appendDummyInput()
        .appendField("color at");
    this.appendValueInput("brightness")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("% brightness");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#891813");
 this.setTooltip("Set the pixel to a color and set the brightness.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pixels_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set pixel")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["1234","1234"]]), "pixel")
        .appendField("off");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#891813");
 this.setTooltip("Turn off selected pixel(s).");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['color_random'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("random color");
    this.setOutput(true, "Colour");
    this.setColour("#891813");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['color_picker'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.setOutput(true, "Colour");
    this.setColour("#891813");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['sound_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("stop sound");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1b84e4");
 this.setTooltip("Turn off sounds.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sound_note'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("play musical note")
        .appendField(new Blockly.FieldDropdown([["B (0)","B0"], ["C (1)","C1"], ["C# (1)","CS1"], ["D (1)","D1"], ["D# (1)","DS1"], ["E (1)","E1"], ["F (1)","F1"], ["F# (1)","FS1"], ["G (1)","G1"], ["G# (1)","GS1"], ["A (1)","A1"], ["A# (1)","AS1"], ["B (1)","B1"], ["C (2)","C2"], ["C# (2)","CS2"], ["D (2)","D2"], ["D# (2)","DS2"], ["E (2)","E2"], ["F (2)","F2"], ["F# (2)","FS2"], ["G (2)","G2"], ["G# (2)","GS2"], ["A (2)","A2"], ["A# (2)","AS2"], ["B (2)","B2"], ["C (3)","C3"], ["C# (3)","CS3"], ["D (3)","D3"], ["D# (3)","DS3"], ["E (3)","E3"], ["F (3)","F3"], ["F# (3)","FS3"], ["G (3)","G3"], ["G# (3)","GS3"], ["A (3)","A3"], ["A# (3)","AS3"], ["B (3)","B3"], ["C (4)","C4"], ["C# (4)","CS4"], ["D (4)","D4"], ["D# (4)","DS4"], ["E (4)","E4"], ["F (4)","F4"], ["F# (4)","FS4"], ["G (4)","G4"], ["G# (4)","GS4"], ["A (4)","A4"], ["A# (4)","AS4"], ["B (4)","B4"], ["C (5)","C5"], ["C# (5)","CS5"], ["D (5)","D5"], ["D# (5)","DS5"], ["E (5)","E5"], ["F (5)","F5"], ["F# (5)","FS5"], ["G (5)","G5"], ["G# (5)","GS5"], ["A (5)","A5"], ["A# (5)","AS5"], ["B (5)","B5"], ["C (6)","C6"], ["C# (6)","CS6"], ["D (6)","D6"], ["D# (6)","DS6"], ["E (6)","E6"], ["F (6) ","F6"], ["F# (6)","FS6"], ["G (6)","G6"], ["G# (6)","GS6"], ["A (6)","A6"], ["A# (6)","AS6"], ["B (6)","B6"], ["C (7)","C7"], ["C# (7)","CS7"], ["D (7)","D7"], ["D# (7)","DS7"], ["E (7)","E7"], ["F (7)","F7"], ["F# (7)","FS7"], ["G (7)","G7"], ["G# (7)","GS7"], ["A (7)","A7"], ["A# (7)","AS7"], ["B (7)","B7"], ["C (8)","C8"], ["C# (8)","CS8"], ["D (8)","D8"], ["D# (8)","DS8"]]), "note");
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField("for");
    this.appendDummyInput()
        .appendField("seconds, or");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "checked")
        .appendField("until stopped");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1b84e4");
 this.setTooltip("Play a musical note.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sound_tone'] = {
  init: function() {
    this.appendValueInput("tone")
        .setCheck("Number")
        .appendField("play tone at");
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField("Hz")
        .appendField("  for");
    this.appendDummyInput()
        .appendField("seconds, or");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "checked")
        .appendField("untl stopped");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1b84e4");
 this.setTooltip("Play a tone at a frequency in Hz.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sound_effect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("play sound effect")
        .appendField(new Blockly.FieldDropdown([["siren","siren"], ["whistle down","whistle_down"], ["whistle up","whistle_up"], ["correct","correct"], ["incorrect","incorrect"], ["phaser","phaser"], ["happy birthday","happy_birthday"], ["close encounters","close_encounters"], ["super mario","super_mario"], ["up and down","up_and_down"], ["random sounds","random_sounds"], ["red alert","red_alert"], ["whoops","whoops"], ["buzz buzz buzz","buzz_buzz_buzz"]]), "effect");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1b84e4");
 this.setTooltip("Play a sound effect");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['controls_loop_forever'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("forever");
    this.appendDummyInput()
        .appendField("do");
    this.appendStatementInput("do")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("repeat statements in do loop forever");
 this.setHelpUrl("");
  }
};
