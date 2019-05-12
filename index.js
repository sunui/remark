'use strict'

var unified = require('unified')
var parse = require('./lib/remark-parse')
var stringify = require('./lib/remark-stringify')

module.exports = unified()
  .use(parse)
  .use(stringify)
  .freeze()
