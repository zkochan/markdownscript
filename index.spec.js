'use strict'
const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect

const m = require('.')

describe('markdownscript', () => {
  it('should create an AST node with attribute', () => {
    const ast = m.heading({ depth: 2 }, [
      m.paragraph([
        m.text({
          value: 'foo',
        }),
      ]),
    ])
    expect(ast).to.eql({
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'foo',
            },
          ],
        },
      ],
    })
  })
})
