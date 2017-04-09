/* eslint-disable */
var path = require('path')
module.exports = {
  entry: './src/client/components/App.jsx',
  devServer: {
    inline: true
  },
  output: {
    path: path.resolve(__dirname, '/public/build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }
    ]
  }
}
