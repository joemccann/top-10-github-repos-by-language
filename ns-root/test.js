var test = require('tape')
var path = require('path')

test('@ns/root', function(t) {
  var root = require('./')

  t.ok(root, 'project root was found')

  var pkg = require(path.join(root, 'package.json'))

  t.equals(pkg.name, 'github-by-lang', 'package.json name should be "github-by-lang"')
  t.end()
})
