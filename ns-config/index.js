// The port to use for serving the site
exports.port = process.env.PORT || 9959

// Whether the server is running in production or development
// mode. Development is the default, and should be used to disable
// caching and other production optimisations.
exports.production = process.env.NODE_ENV === 'production'
exports.test = process.env.NODE_ENV === 'test'
exports.dev = !exports.production && !exports.test
exports.HEAD = String(process.env.GIT_SHA || Math.random()).slice(-6) // used for caching...
exports.logFile = process.env.LOG_FILE
