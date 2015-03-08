# @ns/root

Points to the root directory of the project.

## Usage

### `directory = require('@ns/root')`

Returns the root directory as a string when required.

``` javascript
var root = require('@ns/root')
var path = require('path')

var distDirectory = path.join(root, 'dist')
```

## Why?

The actual directory of each module can change depending on whether or not it's
been symlinked using `linklocal`. Normally this is fine, and encourages
separation between each module. However this breaks down if you *need* to
access a directory relative to the root of the project, in which case it's
easier to just use this.
