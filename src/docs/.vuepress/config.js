const path = require('path')
module.exports = {
  title: 'MCCO',
  base: '/mcco/',
  dest: path.resolve(__dirname, '../../../public/mcco'),
  themeConfig: {
    sidebar: [
      '/',
    ],
    navbar: false,
  }
}