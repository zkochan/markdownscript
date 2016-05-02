'use strict'
const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect

const m = require('.')
const heading = m.heading
const paragraph = m.paragraph
const text = m.text

describe('markdownscript', () => {
  it('should create an AST node with attribute', () => {
    const ast = heading({ depth: 2 }, [
      paragraph([
        text({
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

  it('should transform strings into text nodes', () => {
    const ast = heading({ depth: 2 }, [paragraph(['foo'])])
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

  it('should create heading with proper depth', () => {
    const ast = m.h3([paragraph(['Hello world!'])])
    expect(ast).to.eql({
      type: 'heading',
      depth: 3,
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Hello world!',
            },
          ],
        },
      ],
    })
  })
})
