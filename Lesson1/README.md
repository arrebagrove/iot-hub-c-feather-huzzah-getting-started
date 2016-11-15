---
services: iot-hub, iot-suite
platforms: Arduino
author: yaozheng
---

# Configure an Adafruit Feather HUZZAH ESP8266 and run a sample app on it
This sample repo accompanies [Lesson 1: Configure your device] lesson. It shows how to setup an Adafruit Feather HUZZAH ESP8266 board, deploy and run a sample application.

## Repository information
- `app` sub-folder contains the sample `app.ino` application that blinks the GPIO #0 on-barod LED.
- `config.json` contains required configuration settings.

## Running this sample
Please follow the [Lesson 1: Configure your device] for detailed walkthrough of the steps below.

### Install required tools

  ```bash
  npm install -g gulp device-discovery-cli
  ```

### Deploy and run

Install required npm packages on the host:

  ```bash
  # For Windows command prompt
  npm install

  # For macOS or Ubuntu
  sudo npm install
  ```

Install required tools/packages for the  Adafruit Feather HUZZAH ESP8266 board, deploy sample application, and run it on the device:

  ```bash
  # For Windows command prompt
  gulp install-tools
  gulp run

  # For macOS or Ubuntu
  sudo gulp install-tools
  sudo gulp run
  ```
