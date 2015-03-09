const config = require('@ns/config')
const path   = require('path')
const st     = require('st')

// Determine which directory to serve out of based on production or not...
const staticDirectory = path.resolve(require('@ns/root'), config.dev ? 'build': 'dist')

const staticServer = st({
  path: staticDirectory,
  index: 'index.html',
  extensions: ['.html'],
  passthrough: true,
  cache: config.production
})

module.exports = staticServer
