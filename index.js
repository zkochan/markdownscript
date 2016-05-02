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
    node.children = children.map(child => {
      if (typeof child === 'string') return markdownScript.text({ value: child })
      return child
    })
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

module.exports = markdownScript
