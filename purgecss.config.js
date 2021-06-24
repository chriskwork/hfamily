module.exports = {
  content: ['*.html, src/js/*.js'],
  css: ['src/css/main.css'],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  output: './css/main.css',
}
