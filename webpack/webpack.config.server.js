const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: './src/serverRenderer.js',
  externals: [nodeExternals()],
  output: {
    publicPath: '/dist/',
    filename: '[name].server.js',
    libraryTarget: 'commonjs2',
    chunkFilename: '[name].server.js',
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        include: /src/,
        use: [
          {
            loader: 'css-loader', // It doesn't embed CSS but only exports the identifier mappings.
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
});
