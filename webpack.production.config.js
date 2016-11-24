var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CopyWebpackPluginConfig = new CopyWebpackPlugin([{
  from: __dirname + '/src/css/globalStyles.css',
  to: 'globalStyles.css'
}]);
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: __dirname + '/src/index.jsx',
  output: {
    path: __dirname + '/dist',
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
  },
  plugins: [
    HtmlWebpackPluginConfig,
    CopyWebpackPluginConfig
  ]
};
