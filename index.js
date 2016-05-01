'use strict'
const slice = Array.prototype.slice

function markdownScript (type) {
  let node = { type }
  let attributes = {}
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] instanceof Array) {
      node.children = arguments[i]
    } else {
      attributes = arguments[i]
    }
  }
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
