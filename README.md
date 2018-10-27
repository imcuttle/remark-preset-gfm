# remark-preset-gfm

[![Build status](https://img.shields.io/travis/imcuttle/remark-preset-gfm/master.svg?style=flat-square)](https://travis-ci.org/imcuttle/remark-preset-gfm)
[![Test coverage](https://img.shields.io/codecov/c/github/imcuttle/remark-preset-gfm.svg?style=flat-square)](https://codecov.io/github/imcuttle/remark-preset-gfm?branch=master)
[![NPM version](https://img.shields.io/npm/v/remark-preset-gfm.svg?style=flat-square)](https://www.npmjs.com/package/remark-preset-gfm)
[![NPM Downloads](https://img.shields.io/npm/dm/remark-preset-gfm.svg?style=flat-square&maxAge=43200)](https://www.npmjs.com/package/remark-preset-gfm)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)

[Remark](https://github.com/remarkjs/remark) preset for gfm (GitHub Favorite Markdown)

## Features

- Github break line
- Gemoji
- Svg head link anchor
- Code highlight

## Installation

```bash
npm install remark-preset-gfm
# or use yarn
yarn add remark-preset-gfm
```

## Usage

```javascript
const remark = require('remark')
const html = require('remark-html')
const gfm = require('remark-preset-gfm')

const markdownHtml = remark()
  .use(gfm)
  .use(html)
  .processAsync('markdown text')
  .toString()

const htmlOutput = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <link rel="stylesheet" href="//unpkg.com/github-markdown-css">
  <link rel="stylesheet" href="//unpkg.com/highlight.js/styles/github.css">
  <style>
    .markdown-body {
      max-width: 65%;
      margin: 40px auto 30px;
    }
    @media screen and (max-width: 1200px) {
      .markdown-body {
        max-width: 78%;
      }
    }

    @media screen and (max-width: 700px) {
      .markdown-body {
        max-width: 90%;
        margin: 20px auto 10px;
      }
    }
    @media screen and (max-width: 400px) {
      .markdown-body {
        max-width: 98%;
        margin: 20px auto 10px;
      }
    }
  </style>
</head>
<body>
<div class="markdown-body">
  ${markdownHtml}
</div>
</body>
</html>
`
```

## Related

- [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) - The minimal amount of CSS to replicate the GitHub Markdown style
- [Highlight.js github style](https://github.com/highlightjs/highlight.js/blob/master/src/styles/github.css)

## Contributing

- Fork it!
- Create your new branch:  
  `git checkout -b feature-new` or `git checkout -b fix-which-bug`
- Start your magic work now
- Make sure npm test passes
- Commit your changes:  
  `git commit -am 'feat: some description (close #123)'` or `git commit -am 'fix: some description (fix #123)'`
- Push to the branch: `git push`
- Submit a pull request :)

## Authors

This library is written and maintained by imcuttle, <a href="mailto:moyuyc95@gmail.com">moyuyc95@gmail.com</a>.

## License

MIT - [imcuttle](https://github.com/imcuttle) 🐟
