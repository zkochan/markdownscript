'use strict'
const m = require('.')
const heading = m.heading
const paragraph = m.paragraph

const ast = heading({ depth: 1 }, [
  paragraph(['Hello world!']),
])
console.log(JSON.stringify(ast, null, 2))
