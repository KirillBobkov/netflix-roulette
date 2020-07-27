const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

const isDev = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  name: 'client',
  target: 'web',

  entry: [
    isDev && 'webpack-hot-middleware/client',
    './src/client.jsx',
  ].filter(Boolean),

  plugins: [    
    !isDev && new CleanWebpackPlugin('./public', { root: path.resolve(__dirname, '../') }),
    isDev && new webpack.HotModuleReplacementPlugin()
  ].filter(Boolean)
});
