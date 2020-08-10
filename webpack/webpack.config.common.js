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

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },

  optimization: {
    nodeEnv: 'development',
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          minChunks: 2,
        },
        default: {
          minChunks: 2,
          reuseExistingChunk: true,
        },
      },
    },
  },

  plugins: [
    isDev ? new Webpack.NamedModulesPlugin() : new Webpack.HashedModuleIdsPlugin(),
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
                '@babel/preset-env',
              ],
              plugins: [
                ['@babel/transform-runtime', {
                  regenerator: true,
                },
                ],
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-syntax-dynamic-import',
                'react-loadable/babel',
              ],
            },
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '/fonts/',
          outputPath: 'fonts',
        },
      },
      {
        test: /\.(ico|png|jpe?g|gif|svg|)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '/images/',
          outputPath: 'images',
        },
      },
    ],
  },
};
