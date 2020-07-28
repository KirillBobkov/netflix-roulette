const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';

console.log(__dirname);

module.exports = merge(common, {
  name: 'client',
  target: 'web',

  entry: [
    isDev && 'webpack-hot-middleware/client',
    './src/client.jsx',
  ].filter(Boolean),

  plugins: [    
    !isDev && new CleanWebpackPlugin(),
    isDev && new webpack.HotModuleReplacementPlugin()
  ].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  }
});
