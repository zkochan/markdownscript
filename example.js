'use strict'
const m = require('.')
const heading = m.heading
const paragraph = m.paragraph
const text = m.text

const ast = heading({ depth: 1 }, [
  paragraph([
    text({
      value: 'Hello world!',
    }),
  ]),
])
console.log(JSON.stringify(ast, null, 2))
