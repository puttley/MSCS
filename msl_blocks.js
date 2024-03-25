
//Blockly.Blocks.math_change.disabled = true; // disables this block in variables

var help_URL = 'https://www.pitsco.com'

Blockly.Blocks['program_end'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("program end");
    this.setPreviousStatement(true, null);
    this.setColour('#eea011');
 this.setTooltip("Terminates the execution of program code that is running.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['program_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("program start");
    this.setNextStatement(true, null);
    this.setColour('#eea011');
 this.setTooltip("Initializes the SEEKER controller. Must be placed at the beginning of program code.");
 this.setHelpUrl(help_URL);
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
 this.setTooltip("Returns the logic state of the start button. Pressed is True or 1. Unpressed is False or 0");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['buttons_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Start","start"], ["A","a"], ["B","b"], ["C","c"], ["D","d"]]), "button")
        .appendField("button is pressed");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#eea011');
 this.setTooltip("Returns the logic state of the selected button. Pressed is True or 1. Unpressed is False or 0.");
 this.setHelpUrl(help_URL);
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
 this.setTooltip("Set the selected DC motor power level. Range is 0 - 100%. A positive power results in a CW spin direction. A negative power results in a CCW spin direction.");
 this.setHelpUrl(help_URL);
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
 this.setTooltip("Set the selected DC motor constant speed to 0 - 100%. A positive speed results in a CW spin direction. A negative speed results in a CCW spin direction.");
 this.setHelpUrl(help_URL);
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
 this.setTooltip("Set each DC motor power level. Range is 0 - 100%. A positive power results in a CW spin direction. A negative power results in a CCW spin direction.");
 this.setHelpUrl(help_URL);
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
 this.setTooltip("Set each DC motor to a constant speed. Range is 0 - 100%. A positive speed results in a CW spin direction. A negative speed results in a CCW spin direction.");
 this.setHelpUrl(help_URL);
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
 this.setTooltip("Rotate the selected DC motor, at a set constant speed, for a set number of degrees. The DC motor will hold it's position once the degree target has been reached. A positive degree number results in a CW rotation. A negative degree number results in a CCW rotation.");
 this.setHelpUrl(help_URL);
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
 this.setTooltip("Rotate the selected DC motor, at a constant speed, to a set encoder count. The motor will hold it's position once the target count has been reached. One DC motor shaft rotation is equal to 2200 counts. CW rotation of the DC motor shaft increments the encoder count. CCW rotation of the DC motor shaft decrements the encoder count.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['motor_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["1234","1234"]]), "motor");
    this.appendDummyInput()
        .appendField("stop with")
        .appendField(new Blockly.FieldDropdown([["coast","coast"], ["brake","brake"]]), "brake");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#587081');
 this.setTooltip("Stop the selected DC motor using a 'brake' or 'coast' action.");
 this.setHelpUrl(help_URL);
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
 this.setTooltip("Returns True or 1 if the selected DC motor is in process of moving to a encoder count or degrees target. Returns False or 0 when the target is reached.");
 this.setHelpUrl(help_URL);
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
 this.setTooltip("Inverts the direction of rotation for the selected DC motor. This harmonizes the control of left and right facing wheel drive motors on a mobile robot.");
 this.setHelpUrl(help_URL);
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
 this.setTooltip("Set the rotation speed of the selected servo to 0 - 100%.");
 this.setHelpUrl(help_URL);
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
 this.setTooltip("Set the rotation speed of each servo to 0 - 100%.");
 this.setHelpUrl(help_URL);
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
 this.setTooltip("Rotate the selected servo to a set position between 0 - 180 degrees. 90 degrees is the servo center position.");
 this.setHelpUrl(help_URL);
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
 this.setTooltip("Rotate each servo to a set position between 0 - 180 degrees. 90 degrees is the servo center position.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['get_servo_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("servo")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "servo")
        .appendField("get position");
    this.setOutput(true, null);
    this.setColour("#C75052");
 this.setTooltip("Returns the position of the selected servo. The position returned is 0 - 180 degrees.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['set_servo_invert'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("servo")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "servo");
    this.appendDummyInput()
        .appendField("invert direction")
        .appendField(new Blockly.FieldDropdown([["true","True"], ["false","False"]]), "invert");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#C75052");
 this.setTooltip("Inverts the direction of position rotation of the selected servo. This can be useful when harmonizing the positioning, or movement coordination of servos that are facing in opposite directions.");
 this.setHelpUrl(help_URL);
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
 this.setTooltip("Start driving in the selected direction at 0 - 100% speed. ");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['spin_turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("spin")
        .appendField(new Blockly.FieldDropdown([["right","right"], ["left","left"]]), "action");
    this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("at");
    this.appendDummyInput()
        .appendField("% speed for");
    this.appendValueInput("degrees")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("degrees")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "wait")
        .appendField("wait");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("Spin turn in the selected direction, at a set speed, for a set number of degrees. Having 'wait' checked pauses the execution of code until the spin target is reached.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['pivot_turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pivot")
        .appendField(new Blockly.FieldDropdown([["right","right"], ["left","left"]]), "action");
    this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("at");
    this.appendDummyInput()
        .appendField("% speed for");
    this.appendValueInput("degrees")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("degrees")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "wait")
        .appendField("wait");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("Pivot turn in the selected direction, at a set speed, for a set number of degrees. Having 'wait' checked pauses the execution of code until the pivot target is reached.");
 this.setHelpUrl(help_URL);
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
        .appendField("cm")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "wait")
        .appendField("wait");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("Drive in the selected direction, at a set speed, for a distance in centimeters then stop. Having 'wait' checked pauses the execution of code until the distance is reached.");
 this.setHelpUrl(help_URL);
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
 this.setTooltip("Start driving in the selected direction. The left and right wheels can be set to spin at different speeds enabling more complex path movements.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['stop_driving'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("stop driving");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("Immediately stop the drive wheels.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['set_drive_invert'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("invert drive direction")
        .appendField(new Blockly.FieldDropdown([["true","True"], ["false","False"]]), "invert");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#7B1FA2");
 this.setTooltip("Invert or 'reverse' the driving direction(s) of the robot.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['get_encoder'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("encoder")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "encoder")
        .appendField("get count");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Get the current count value of the selected DC motor encoder.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['get_lidar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("port")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"]]), "port")
        .appendField("TOF sensor | get distance (mm)");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Returns the distance in millimeters to an object detected by the TOF sensor. Range is approximately 30 - 1000 millimeters.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['get_sonic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("port")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"]]), "port")
        .appendField("ultrasonic sensor | get distance (cm)");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Returns the distance in centimeters to an object detected by the Ultrasonic sensor. Range is approximately 2 - 350 centimeters.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['get_color_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("port")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"]]), "port")
        .appendField("color sensor |");
    this.appendDummyInput()
        .appendField("return True if")
        .appendField(new Blockly.FieldDropdown([["red","red"], ["green","green"], ["blue","blue"]]), "color");
    this.appendValueInput("threshold")
        .setCheck("Number")
        .appendField("| threshold =");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Returns True if selected color is detected. The threshold can be adjusted to increase or decrease sensitivity due to ambient lighting conditions. Recommended threshold range is 0.01 - 1.0.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['get_color_rgbc_byte'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("port")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"]]), "port")
        .appendField("color sensor | get")
        .appendField(new Blockly.FieldDropdown([["red level","red"], ["green level","green"], ["blue level","blue"], ["ambient level","ambient"], ["rgb value","rgb"], ["hex value","hex"]]), "data");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Returns the red, green, blue or ambient light level. Red, green and blue level ranges are 0 - 255. Ambient level range is 0 - 1000. The rgb and hex value of the detected color can also be returned.");
 this.setHelpUrl(help_URL);
  }
};


Blockly.Blocks['get_temperature_humidity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("port")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"]]), "port")
        .appendField("TH sensor | get");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["temperature_F","tempf"], ["temperature_C","tempc"], ["humidity_%","humid"]]), "th");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Returns the selected measurement of temperature or humidity.");
 this.setHelpUrl("help_URL");
  }
};

Blockly.Blocks['get_rotary_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("port")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"]]), "port")
        .appendField("rotary sensor | get value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Returns the value of the rotary angle sensor knob position. Min / Max = 0 - 100.");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['get_sensor_port_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("port")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"]]), "port")
        .appendField("sensor port | get")
        .appendField(new Blockly.FieldDropdown([["analog","analog"], ["digital","digital"]]), "type")
        .appendField("value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Returns the analog or digital value read by the selected sensor port.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['reset_encoders'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("encoder")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["1234","1234"]]), "encoder")
        .appendField("reset");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Reset the selected DC motor encoder(s) to zero.");
 this.setHelpUrl(help_URL);
  }
};


Blockly.Blocks['delay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wait for");
    this.appendValueInput("seconds")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#eea011');
 this.setTooltip("Pause program execution for amount of time in seconds.");
 this.setHelpUrl(help_URL);
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
 this.setTooltip("Show an animation pattern for number of seconds.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['pixel_blink'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("blink pixel")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"], ["D","D"], ["ABCD","ABCD"]]), "pixel")
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
 this.setTooltip("Blink the pixel with a selected color for a number of times.");
 this.setHelpUrl(help_URL);
  }
};


Blockly.Blocks['pixel_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set pixel")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"], ["D","D"], ["ABCD","ABCD"]]), "pixel")
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
 this.setTooltip("Set the pixel to a color and set the brightness. Brightness is 0 - 100%. A brightness will not be applied to the color if it is set to a -1.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['pixel_rgb_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set pixel")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["1234","1234"]]), "pixel")
        .appendField("to RGB value");
    this.appendValueInput("rgb")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#891813");
 this.setTooltip("");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['pixel_hex'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set pixel")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"], ["D","D"], ["ABCD","ABCD"]]), "pixel");
    this.appendValueInput("hex")
        .setCheck("String")
        .appendField("to HEX value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#891813");
 this.setTooltip("Set the color of the selected pixel to a hexadecimal (HEX) value. Range is #000000 - #ffffff. The HEX value must be a string.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['pixel_rgb'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set pixel")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"], ["D","D"], ["ABCD","ABCD"]]), "pixel")
        .appendField("to RGB level:");
    this.appendValueInput("red")
        .setCheck("Number")
        .appendField("red");
    this.appendValueInput("green")
        .setCheck("Number")
        .appendField("green");
    this.appendValueInput("blue")
        .setCheck("Number")
        .appendField("blue");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#891813");
 this.setTooltip("Set the color of the selected pixel to an RGB level. Red, green and blue range is 0 - 255.");
 this.setHelpUrl(help_URL);
  }
};


Blockly.Blocks['pixels_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set pixel")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"], ["D","D"], ["ABCD","ABCD"]]), "pixel")
        .appendField("off");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#891813");
 this.setTooltip("Turn off selected pixels.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['color_random'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("random color");
    this.setOutput(true, "Colour");
    this.setColour("#891813");
 this.setTooltip("Returns a random color.");
 this.setHelpUrl(help_URL);
  }
};



Blockly.Blocks['color_picker'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.setOutput(true, "Colour");
    this.setColour("#891813");
 this.setTooltip("Returns the color chosen from the color picker pallette.");
 this.setHelpUrl(help_URL);
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
 this.setTooltip("Stop any current sound being played.");
 this.setHelpUrl(help_URL);
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
 this.setTooltip("Play a musical note from the dropdown list.");
 this.setHelpUrl(help_URL);
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
 this.setTooltip("Play a tone at a frequency in Hz. Range is approximately 30 - 20000.");
 this.setHelpUrl(help_URL);
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
 this.setTooltip("Play a sound effect from the dropdown list.");
 this.setHelpUrl(help_URL);
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
 this.setTooltip("Repeat statements in a forever loop.");
 this.setHelpUrl(help_URL);
  }
};
