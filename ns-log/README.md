# @ns/log

Logging package for the website which wraps up
[bole](http://github.com/rvagg/bole) with preconfigured output streams.

Use this the same as you would bole, with the exception of not needing to
use the `output` method:

``` javascript
const log = require('@ns/log')('server')

module.exports.derp = function derp() {
  log.debug('w00t!')
  log.debug('Running mymodule#derp()')
}
```
