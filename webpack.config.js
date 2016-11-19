var path = require('path');

module.exports = {
  entry: __dirname + '/src/index.jsx',
  output: {
    path: __dirname + '/src/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: __dirname + '/src/',
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  }
};
