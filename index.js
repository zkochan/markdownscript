'use strict'
const slice = Array.prototype.slice
const argx = require('argx')

function markdownScript () {
  const args = argx(arguments)
  const node = {
    type: args.shift(String),
  }
  let children = args.pop(Array)
  if (children) {
    node.children = children
      .map(child => {
        if (typeof child === 'string') return markdownScript.text({ value: child })
        return child
      })
      .reduce((merged, child) => {
        if (child.type === 'text' && merged.length && merged[merged.length - 1].type === 'text') {
          merged[merged.length - 1].value += child.value
          return merged
        }
        return merged.concat(child)
      }, [])
  }
  const attributes = args.shift(Object) || {}
  return Object.assign(node, attributes)
}

const types = [
  'thematicBreak',
  'html',
  'yaml',
  'table',
  'tableCell',
  'tableRow',
  'tableRow',
  'paragraph',
  'text',
  'code',
  'list',
  'listItem',
  'definition',
  'footnoteDefinition',
  'heading',
  'blockquote',
  'link',
  'image',
  'footnote',
  'strong',
  'emphasis',
  'delete',
  'inlineCode',
  'break',
  'root',
]

types.forEach(type => {
  markdownScript[type] = function () {
    return markdownScript.apply(null, [type].concat(slice.call(arguments)))
  }
})

;[1, 2, 3, 4, 5, 6].forEach(depth => {
  markdownScript[`h${depth}`] = function () {
    const args = argx(arguments)
    let children = args.pop(Array)
    const attributes = Object.assign(args.shift(Object) || {}, { depth })
    const newargs = ['heading', attributes]
    if (children) newargs.push(children)
    return markdownScript.apply(null, newargs)
  }
})

module.exports = markdownScript
