const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index.js',

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [{
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
        }]
      },

    watch: false,

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}