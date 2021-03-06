'use strict'
var m = require('./')
var heading = m.heading
var paragraph = m.paragraph

var ast = heading({ depth: 1 }, [
  paragraph(['Hello world!']),
])
console.log(JSON.stringify(ast, null, 2))

//! ## API
//! `m(type, [attributes], [children])` - create a node

console.log(m('link', { url: 'http://google.com' }, ['Google']))

//! `m.[type]([attributes], [children])` - create a node

var code = m.code
console.log(code({ lang: 'js' }, ['void 0']))

//! `m.h[depth]([attributes], [children])` - create a heading node of the specified depth

var h3 = m.h3
console.log(h3([paragraph(['Foo bar'])]))
