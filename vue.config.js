module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mcco/'
    : '/',
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/mcco-materiel-doc': {
        target: 'http://localhost:7001/public',
        changeOrigin: true,
        pathRewrite: { '^/mcco-materiel-doc': '' },
      },
      '/': {
        target: 'http://localhost:7001',
        changeOrigin: true,
      },
    }
  }
}