---
services: iot-hub, iot-suite
platforms: Arduino
author: yaozheng
---

## Repository information
- `app` sub-folder contains the sample Node.js application that sends device-2-cloud messages.
- `arm-template.json` is the ARM template containing an Azure function app and a storage account.
- `arm-template-param.json` file is the configuration file used by the ARM template.
- `config.json` is the configuration file that contains information required to connect to the board and your IoT hub.
- `ReceiveDeviceMessages` sub-folder contains Node.js code for the Azure function.

## Running this sample
Please follow the [step-by-step instructions](https://aka.ms/rpi-node-3) for detailed walkthough of the steps below.

### Deploy and run

```bash
npm install
```

```bash
gulp install-tools
gulp deploy
gulp run
```

```bash
gulp run --read-storage
```
