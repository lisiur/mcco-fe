module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:7001',
        changeOrigin: true,
        historyApiFallback: true,
      },
    }
  }
}