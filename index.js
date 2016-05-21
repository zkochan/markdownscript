function popChildren (args) {
  return args[args.length - 1] instanceof Array ? args.pop() : undefined
}

export default function markdownScript (type, ...args) {
  const node = {}
  const children = popChildren(args)
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
        return [...merged, child]
      }, [])
  }
  const attributes = args.shift() || {}
  return {
    type,
    ...node,
    ...attributes,
  }
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
  markdownScript[type] = (...args) => markdownScript(type, ...args)
})

;[1, 2, 3, 4, 5, 6].forEach(depth => {
  markdownScript[`h${depth}`] = function (...args) {
    const children = popChildren(args)
    const attributes = {
      ...(args.shift() || {}),
      depth,
    }
    const newargs = ['heading', attributes]
    if (children) newargs.push(children)
    return markdownScript(...newargs)
  }
})
