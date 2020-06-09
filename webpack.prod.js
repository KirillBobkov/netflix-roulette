const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Webpack = require('webpack');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',

  plugins: [
      new Webpack.optimize.ModuleConcatenationPlugin(),
      new MiniCssExtractPlugin({
        filename: 'bundle.css'
      })
    ],

  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'sass-loader',
          'style-loader', 
          'css-loader', 
        ]
      }
    ]
  }
});