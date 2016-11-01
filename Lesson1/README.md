---
services: iot-hub, iot-suite
platforms: c
author: yaozheng
---

## Repository information
- `app` sub-folder contains the sample Arduino application that blinks the LED attached to the Adafruit Feather HUZZAH ESP8266.
- `config.json` contains required configuration settings.

### Install required tools

```bash
npm install -g device-discovery-cli gulp
```

### Deploy and run

```bash
npm install
```

```bash
gulp install-tools
gulp deploy
```
