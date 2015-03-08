const config = require('@ns/config')
const bole   = require('bole')

module.exports = bole

bole.output({
  level: config.dev ? 'info' : 'debug',
  stream: process.stdout
})

if (config.logFile) {
  console.log('Starting logging to %s', config.logFile)
  bole.output({
    level: 'debug',
    stream: fs.createWriteStream(config.logFile)
  })
}
