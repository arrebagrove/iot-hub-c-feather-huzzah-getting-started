---
services: iot-hub, iot-suite
platforms: Arduino
author: yaozheng
---

# Send device-to-cloud messages
This sample repo accompanies [Lesson 4: Send cloud-to-device messages]() lesson. It shows how to send messages from an Azure IoT hub to an Adafruit Feather HUZZAH ESP8266 board.

## Prerequisites
See [Lesson 4: Send cloud-to-device messages]() for more information.

## Repository information
- `app` sub-folder contains the sample Arduino application that receives cloud-2-device messages.

## Running this sample
Please follow the [Lesson 4: Send cloud-to-device messages]() for detailed walkthrough of the steps below.

### Deploy and run

Install required npm packages on the host:

  ```bash
  # For Windows command prompt
  npm install

  # For macOS or Ubuntu
  sudo npm install
  ```

Create a JSON configuration file in the `.iot-hub-getting-started` sub-folder of the current user's home directory:
  ```bash
  gulp init
  ```

Install required tools/packages on the Adafruit Feather HUZZAH ESP8266 board, deploy sample application, and run it on the device:
  ```bash
  # For Windows command prompt
  gulp install-tools
  gulp run

  # For macOS or Ubuntu
  sudo gulp install-tools
  sudo gulp run
  ```