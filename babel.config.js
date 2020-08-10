module.exports = {
    presets: [
        ["@babel/preset-env", {
          "useBuiltIns": "entry"
        }],
        '@babel/preset-react',
        "@babel/preset-flow"
      ],
      env: {
          test: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              'babel-plugin-transform-es2015-modules-commonjs',
              "@babel/plugin-syntax-dynamic-import",
               "react-loadable/babel",
            ],
          },
      }
};

