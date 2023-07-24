module.exports = {
  devServer: {
    proxy: {
      '/postgres': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
}