const mothership = require('mothership')
const path       = require('path')

module.exports = path.dirname(mothership.sync(__dirname, function(pkg) {
  return pkg.name === 'github-by-lang' // name of root package.json file
}).path)

// This should never happen, but if it does it's
// better to know sooner rather than later
if (!module.exports) throw new Error(
  'Could not find @ns/website package root'
)
