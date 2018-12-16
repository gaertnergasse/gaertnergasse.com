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
  IGNORE_EXTENSIONS: ['ai', 'psd', 'xcf'],
}
