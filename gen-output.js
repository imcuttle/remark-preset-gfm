/**
 * @file example
 * @author imcuttle <moyuyc95@gmail.com>
 * @date 2018/10/27
 *
 */

const fs = require('fs')
const remark = require('remark')
const raw = require('rehype-raw')
const remark2Rehype = require('remark-rehype')
const html = require('rehype-stringify')

const markdownHtml = String(
  remark()
    .use(require('./'))
    .use(remark2Rehype)
    .use(raw)
    .use(html)
    .processSync(fs.readFileSync('./README.md'))
)

const htmlOutput = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>remark-preset-gfm Example</title>
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

fs.writeFileSync('./output.html', htmlOutput)
