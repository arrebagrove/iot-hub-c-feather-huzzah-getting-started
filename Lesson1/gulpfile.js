require('gulp-common')(require('gulp'), 'arduino-esp8266-huzzah', {
  appName: 'lesson-1',
  configTemplate: {},
  configPostfix: "huzzah",
  app: ['app.ino']
});
