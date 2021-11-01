var webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      '$ENV': {
        API_KEY: JSON.stringify(window.process.env.API_KEY)
      }
    })
  ]
}
