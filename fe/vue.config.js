var path = require('path');

module.exports = {
  //...
  devServer: {
    disableHostCheck: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    host: 'eungod24.com',
    port: 8080
  }
};
