const fs = require('fs');

module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8085, // CHANGE YOUR PORT HERE!
    https: {
          key: fs.readFileSync('./certs/example.com+5-key.pem'),
          cert: fs.readFileSync('./certs/example.com+5.pem'),
    },
    hotOnly: false
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/acoustic-podcast/'
    : '/'

}
