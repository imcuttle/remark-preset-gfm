/**
 * @file main
 * @author imcuttle
 * @date 2018/4/4
 */

const remark = require('remark')
const html = require('remark-html')
const fs = require('fs')

const gfm = require('../')
const { fixture } = require('./helper')

function read(name) {
  return fs.readFileSync(fixture(name)).toString()
}

function getChildren(ast) {
  return ast && ast.children
}

describe('remarkPresetGfm', function() {
  it('should autolink-headings', function() {
    expect(
      remark()
        .use(gfm)
        .use(html)
        .use(require('../strip-position'))
        .processSync(read('autolink-headings.md'))
        .toString()
    ).toMatchSnapshot()
  })

  it('should gemoji-to-emoji', function() {
    expect(
      remark()
        .use(gfm)
        .use(require('../strip-position'))
        .processSync(read('gemoji-to-emoji.md'))
        .toString()
    ).toMatchSnapshot()
  })

  it('should frontmatter', function() {
    expect(
      remark()
        .use(gfm)
        .use(require('../strip-position'))
        .use(html)
        .processSync(read('frontmatter.md'))
        .toString()
    ).toMatchSnapshot()
  })

  it('should github-break', function() {
    expect(
      remark()
        .use(gfm)
        .use(require('../strip-position'))
        .use(html)
        .processSync(read('github-break.md'))
        .toString()
    ).toMatchInlineSnapshot(`
"<p>newline<br>
newline<br>
endline</p>
"
`)
  })

  it('should highlight.md', function() {
    expect(
      remark()
        .use(gfm)
        .use(require('../strip-position'))
        .use(html)
        .processSync(read('highlight.md'))
        .toString()
    ).toMatchInlineSnapshot(`
"<pre><code class=\\"hljs language-javascript\\"><span class=\\"hljs-built_in\\">console</span>.log(<span class=\\"hljs-number\\">123</span>)</code></pre>
<pre><code>function a() {}
</code></pre>
"
`)
  })
})
