'use strict'

var unified = require('unified')
var parse = require('./packages/remark-parse')
var stringify = require('./packages/remark-stringify')

module.exports = unified()
  .use(parse)
  .use(stringify)
  .freeze()
