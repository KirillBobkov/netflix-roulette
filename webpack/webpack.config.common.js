const path = require('path');
const Webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const modeName = process.env.NODE_ENV;
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: modeName,

   output: {
    filename: 'js/[name].js',
    path: path.resolve('./dist'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  
  plugins: [
    isDev ? new Webpack.NamedModulesPlugin() : new Webpack.HashedModuleIdsPlugin(),
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/images', to: './images' },
        { from: 'src/assets/fonts', to: './fonts' },
      ]
    })
  ].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react',
                '@babel/preset-env'
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties',
              ]
            }
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|svg|ttf|woff|woff2)(\?.*)?$/,
        use: 'file-loader'
      }
    ]
  }
};