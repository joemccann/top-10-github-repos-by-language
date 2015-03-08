#!/usr/bin/env node

require('6to5/register')

const log    = require('@ns/log')('server')
const router = require('@ns/router')
const config = require('@ns/config')
const chalk  = require('chalk')
const http   = require('http')

const PORT   = process.env.PORT || 9599
const server = http.createServer(router)

server.listen(PORT, listening)

function listening(err) {
  if (err) {
    log.error(err)
    throw err
  }

  var port = this.address().port

  log.info('Server started on port %d', port)
  console.error()
  console.error(chalk.green('Server Running!'))
  console.error('URL:', chalk.blue.underline('http://localhost:' + port))
  console.error()
}
