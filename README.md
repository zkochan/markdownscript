<!--@'# ' + pkg.name-->
# markdownscript
<!--/@-->

<!--@'> ' + pkg.description-->
> Creates markdown Abstract Syntax Tree
<!--/@-->

<!--@shields.flatSquare('npm', 'travis', 'coveralls')-->
[![npm version](https://img.shields.io/npm/v/markdownscript.svg?style=flat-square)](https://www.npmjs.com/package/markdownscript) [![Build Status](https://img.shields.io/travis/zkochan/markdownscript/master.svg?style=flat-square)](https://travis-ci.org/zkochan/markdownscript) [![Coverage Status](https://img.shields.io/coveralls/zkochan/markdownscript/master.svg?style=flat-square)](https://coveralls.io/r/zkochan/markdownscript?branch=master)
<!--/@-->

## Installation

```sh
npm i -S markdownscript
```

## Usage

<!--@example('./example.js')-->
```js
'use strict'
const m = require('markdownscript')
const heading = m.heading
const paragraph = m.paragraph

const ast = heading({ depth: 1 }, [
  paragraph(['Hello world!']),
])
console.log(JSON.stringify(ast, null, 2))
//> {
//    "type": "heading",
//    "children": [
//      {
//        "type": "paragraph",
//        "children": [
//          {
//            "type": "text",
//            "value": "Hello world!"
//          }
//        ]
//      }
//    ],
//    "depth": 1
//  }
```

## API

`m(type, [attributes], [children])` - create a node

```js
console.log(m('link', { url: 'http://google.com' }, ['Google']))
//> { type: 'link',
//    children: [ { type: 'text', value: 'Google' } ],
//    url: 'http://google.com' }
```

`m.[type]([attributes], [children])` - create a node

```js
const code = m.code
console.log(code({ lang: 'js' }, ['void 0']))
//> { type: 'code',
//    children: [ { type: 'text', value: 'void 0' } ],
//    lang: 'js' }
```

`m.h[depth]([attributes], [children])` - create a heading node of the specified depth

```js
const h3 = m.h3
console.log(h3([paragraph(['Foo bar'])]))
//> { type: 'heading',
//    children: [ { type: 'paragraph', children: [Object] } ],
//    depth: 3 }
```
<!--/@-->

## License

[MIT](./LICENSE) © [Zoltan Kochan](http://kochan.io)

* * *

<!--@dependencies({ shield: 'flat-square' })-->
## <a name="dependencies">Dependencies</a> [![dependency status](https://img.shields.io/david/zkochan/markdownscript/master.svg?style=flat-square)](https://david-dm.org/zkochan/markdownscript/master)

- [babel-runtime](https://github.com/babel/babel/blob/master/packages): babel selfContained runtime

<!--/@-->

<!--@devDependencies({ shield: 'flat-square' })-->
## <a name="dev-dependencies">Dev Dependencies</a> [![devDependency status](https://img.shields.io/david/dev/zkochan/markdownscript/master.svg?style=flat-square)](https://david-dm.org/zkochan/markdownscript/master#info=devDependencies)

- [babel-cli](https://github.com/babel/babel/blob/master/packages): Babel command line.
- [babel-plugin-add-module-exports](https://github.com/59naga/babel-plugin-add-module-exports): Fix babel/babel#2212
- [babel-plugin-transform-runtime](https://github.com/babel/babel/blob/master/packages): Externalise references to helpers and builtins, automatically polyfilling your code without polluting globals
- [babel-preset-es2015](https://github.com/babel/babel/blob/master/packages): Babel preset for all es2015 plugins.
- [babel-preset-stage-0](https://github.com/babel/babel/blob/master/packages): Babel preset for stage 0 plugins
- [babel-register](https://github.com/babel/babel/blob/master/packages): babel require hook
- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog): Commitizen adapter following the conventional-changelog format.
- [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-standard](https://github.com/feross/eslint-config-standard): JavaScript Standard Style - ESLint Shareable Config
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise): Enforce best practices for JavaScript promises
- [eslint-plugin-standard](https://github.com/xjamundx/eslint-plugin-standard): ESlint Plugin for the Standard Linter
- [ghooks](https://github.com/gtramontina/ghooks): Simple git hooks
- [istanbul](https://github.com/gotwarlost/istanbul): Yet another JS code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests. Supports all JS coverage use cases including unit tests, server side functional tests
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [mos](https://github.com/mosjs/mos): A pluggable module that injects content into your markdown files via hidden JavaScript snippets
- [semantic-release](https://github.com/semantic-release/semantic-release): automated semver compliant package publishing
- [tonic-example](https://github.com/zkochan/tonic-example): Tonic example generator
- [validate-commit-msg](https://github.com/kentcdodds/validate-commit-msg): Script to validate a commit message follows the conventional changelog standard

<!--/@-->
