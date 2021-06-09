# ext-to-regexp

Convert extname into regexp.

[![npm][npm-badge]][npm-url]
[![github][github-badge]][github-url]
![node][node-badge]

[npm-url]: https://www.npmjs.com/package/ext-to-regexp
[npm-badge]: https://img.shields.io/npm/v/ext-to-regexp.svg?style=flat-square&logo=npm
[github-url]: https://github.com/best-shot/ext-to-regexp
[github-badge]: https://img.shields.io/npm/l/ext-to-regexp.svg?style=flat-square&colorB=blue&logo=github
[node-badge]: https://img.shields.io/node/v/ext-to-regexp.svg?style=flat-square&colorB=green&logo=node.js

## Installation

```bash
npm install ext-to-regexp
```

## Usage

```cjs
const extToRegexp = require('ext-to-regexp');

extToRegexp({
  extname: ['js', 'jsx']
});
// /\.(js|jsx)$/

extToRegexp({
  suffix: ['min'],
  extname: ['jpg', 'png']
});
// /\.min\.(jpg|png)$/

const foo = extToRegexp({ extname: ['css'] });
const bar = foo.add('sass', 'scss').add('less');
const baz = bar.remove('sass').remove('scss');

console.log(foo); // /\.css$/
console.log(bar); // /\.(css|less|sass|scss)$/
console.log(baz); // /\.(css|less)$/
```
