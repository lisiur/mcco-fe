module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mcco/'
    : '/',
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/': {
        target: 'http://localhost:7001',
        changeOrigin: true,
      },
    }
  }
}