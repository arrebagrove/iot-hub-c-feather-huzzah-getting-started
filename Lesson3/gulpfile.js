/*
 * IoT Hub Adafruit Feather HUZZAH ESP8266 - Microsoft Sample Code - Copyright (c) 2016 - Licensed MIT
 */
'use strict';

var gulp = require('gulp');
var args = require('get-gulp-args')();

var doesReadStorage = args['read-storage'];
var receiveMessages = doesReadStorage ? require('./azure-table.js').readAzureTable : require('./iot-hub.js').readIoTHub;

/**
 * Setup common gulp tasks: init, install-tools, deploy
 */
require('gulp-common')(gulp, 'arduino-esp8266-huzzah', {
  appName: 'lesson-3',
  configTemplate: {
    "iot_hub_connection_string": "[IoT hub connection string]",
    "iot_device_connection_string": "[IoT device connection string]",
    "azure_storage_connection_string": "[Azure storage connection string]",
    "wifi_ssid": "[Wi-Fi SSID]",
    "wifi_password": "[Wi-Fi password]",
    "iot_hub_consumer_group_name": "cg1"
  },
  configPostfix: 'arduino',
  app: ['app.ino', 'config.h']
});

var config = gulp.config;

/**
 * Override 'run' task with customized behavior
 */
if (doesReadStorage) {
  gulp.task('query-table-storage', false, () => { receiveMessages(config); });
  gulp.task('run', 'Runs deployed sample on the board', ['deploy', 'query-table-storage']);
} else {
  gulp.task('query-iot-hub-messages', false, () => { receiveMessages(config); });
  gulp.task('run', 'Runs deployed sample on the board', ['deploy', 'query-iot-hub-messages']);
}
