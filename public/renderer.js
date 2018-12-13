
const process = require('process');

process.once('loaded', () => {
  global.electron = require('electron')
});