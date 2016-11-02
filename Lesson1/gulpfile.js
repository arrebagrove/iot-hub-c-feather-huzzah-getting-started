/*
* IoT Hub Adafruit Feather HUZZAH ESP8266 - Microsoft Sample Code - Copyright (c) 2016 - Licensed MIT
*/

require('gulp-common')(require('gulp'), 'arduino-esp8266-huzzah', {
  appName: 'lesson-1',
  configTemplate: {},
  configPostfix: "huzzah",
  app: ['app.ino']
});
