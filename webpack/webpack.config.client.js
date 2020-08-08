const path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactLoadableSSRAddon = require('react-loadable-ssr-addon');

const isDev = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  name: 'client',
  target: 'web',

  entry: [
    isDev && 'webpack-hot-middleware/client',
    './src/clientRenderer.jsx',
  ].filter(Boolean),

  output: {
    filename: '[name].client.js',
    path: path.resolve('./dist'),
    chunkFilename: '[name].chunk.client.js',
    publicPath: '/dist/'
  },

  plugins: [  
    !isDev && new CleanWebpackPlugin(),  
    isDev && new Webpack.HotModuleReplacementPlugin(),
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new ReactLoadableSSRAddon({
      filename: 'react-loadable-ssr-addon.json'
    })
  ].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  }

  
});
