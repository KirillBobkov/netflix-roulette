const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index.js',

    output: {
        filename: '[name].[contenthash].js',
        path: path.join(__dirname, 'dist'),
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
    ],

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ["@babel/preset-react"],
                ['@babel/preset-env']
              ],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
          }
        },
        {
          test: /\.s?css$/i,
          use: [
            'sass-loader',
            'style-loader', 
            'css-loader', 
          ]
        },
        {
          test: /\.(ico|jpg|jpeg|png|gif|svg|ttf|woff|woff2)(\?.*)?$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        }
      ]
    },
}

   

