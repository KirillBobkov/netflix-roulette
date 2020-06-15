const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const modeName = process.env.NODE_ENV;

const cssLoaders = (extension) => {
  const loaderConfig = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true
      }
    },
    'css-loader'
  ];

  extension && loaderConfig.push(extension);
  return loaderConfig;
};

module.exports = {
  mode: modeName,
  optimization: {
    minimizer: [new TerserPlugin()]
  },
  context: path.join(__dirname, 'src'),
  entry: {
    main: ['@babel/polyfill', './index.js']
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: isDev ? 'source-map' : '',
  devServer: {
    port: 4000,
    hot: isDev
  },
  plugins: [
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      collapse: !isDev
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/assets/images/posters'), to: 'posters' }
      ]
    })
  ],
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
                ['@babel/preset-react'],
                ['@babel/preset-env']
              ],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: cssLoaders()
      },
      {
        test: /\.scss$/,
        use: cssLoaders('sass-loader')
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|svg|ttf|woff|woff2)(\?.*)?$/,
        use: 'file-loader'
      }
    ]
  }
};
