const reqLog    = require('@ns/log')('server:request')
const config    = require('@ns/config')
const uuid      = require('node-uuid')
const statics   = require('./static')
const course    = require('course')
const path      = require('path')
const url       = require('url')
const router    = course()
const startTime = new Date().getTime()

var requestCount = 0

// Define website routes here
// router.post('/contact', require('@ns/contact'))

module.exports = handleRequest

function handleRequest(req, res) {
  requestCount++

  // fast return for /_status checks, no logging
  if (req.url == '/_status') {
    res.setHeader('content-type', 'application/json')
    return res.end(JSON.stringify({
      ok       : true,
      uptime   : Math.round((new Date().getTime() - startTime) / 1000 / 60),
      requests : requestCount,
      head     : config.HEAD,
      env      : process.env.NODE_ENV || '',
      pid      : process.pid
    }))
  }

  req.log = reqLog(uuid.v4())
  req.log.info(req)

  var uri = url.parse(req.url).pathname
  if (uri === '/favicon.ico') uri = req.url = '/assets/favicon.ico'

  res.setHeader('x-env', process.env.NODE_ENV || '')
  res.setHeader('x-head', config.HEAD)

  router(req, res, function(err) {
    if (err) return bail(err, req, res)

    setHardCache(req, res)
    statics(req, res, function(err) {
      if (err) return bail(err, req, res)

      // Serve again, pointing to /404.html
      // this time. This way we still get all of st's
      // benefits for free.
      req.log.info('404 for URL %s', req.url)

      delete req.sturl
      res.statusCode = 404
      req.url = '/404.html'
      statics(req, res, function(err) {
        return bail(err || new Error('404 page unresolved'), req, res)
      })
    })
  })
}

function bail(err, req, res) {
  req.log.error(err)
  res.statusCode = 500
  res.setHeader('content-type', 'text/plain')
  res.write(err.message)
  res.write('\n')
  res.write(err.stack || '')
  res.end()
}

// Hard cached assets: include a hex hash before
// the file extension, rewriting said hash away if it's found.
// e.g. `/bundle.af830cd.css` becomes `/bundle.css`
// Any assets served like this are cached more or less indefinitely.
const HARD_CACHE = 1000 * 60 * 60 * 24 * 7 * 365.25

function setHardCache(req, res) {
  var regex = /\.([a-f0-9]{6,})\.([a-z]{2,5})$/ig
  var uri   = url.parse(req.url)

  if (!regex.test(uri.pathname)) return
  uri.pathname = uri.pathname.replace(regex, '.$2')
  uri = req.url = url.format(uri)

  res.setHeader('cache-control', 'public, max-age='+HARD_CACHE/1000)
  res.setHeader('expires', new Date(Date.now() + HARD_CACHE))
}
