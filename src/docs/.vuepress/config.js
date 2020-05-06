const path = require('path')
module.exports = {
  title: 'MCCO',
  base: '/mcco/doc/',
  dest: path.resolve(__dirname, '../../../public/doc'),
  themeConfig: {
    sidebar: [
      '/',
    ],
    navbar: false,
  }
}