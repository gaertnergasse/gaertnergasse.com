const path = require('path')

const HTML = require('@mspg/transpile-posthtml')
const CSS = require('@mspg/transpile-stylus')

const year = new Date().getFullYear()

module.exports = {
  TRANSPILERS: {
    HTML,
    CSS,
  },
  year,
  IGNORE_EXTENSIONS: ['ai', 'psd', 'xcf', 'py', 'sh', 'xml'],
  WEB_ROOT: '/gaertnergasse.com/',
  MAX_IMAGE_WIDTH: 1500,
}
