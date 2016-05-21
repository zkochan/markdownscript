import {describe, it} from 'mocha'
import {expect} from 'chai'

import m from './index'
const {heading, paragraph, text} = m

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

  it('should merge text nodes', () => {
    const ast = m.paragraph(['Hello ', 'world!', m.link({url: '/foo'}, ['1', '2']), '3', '4'])
    expect(ast).to.eql({
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Hello world!',
        },
        {
          type: 'link',
          url: '/foo',
          children: [
            {
              type: 'text',
              value: '12',
            },
          ],
        },
        {
          type: 'text',
          value: '34',
        },
      ],
    })
  })
})
