/**
 * remark preset for gfm
 * @author imcuttle
 */

exports.plugins = [
  require('remark-github-break'),
  require('remark-gemoji-to-emoji'),
  require('remark-slug'),
  [
    require('@rigor789/remark-autolink-headings'),
    {
      content: require('./link-content'),
      linkProperties: {
        className: 'anchor'
      }
    }
  ],
  require('remark-frontmatter'),
  require('remark-highlight.js')
]
