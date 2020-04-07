const path = require('path');

module.exports = (env, argv) => {
  const config = {
    // mode: 'production',
    mode: 'development',
    devtool: 'source-map',
    entry: './index.js',
    output: {
      // path: path.resolve(__dirname, './dist'),
      filename: 'webpack-numbers.js',
      // libraryTarget: 'umd',
      // globalObject: 'this',
      libraryTarget: 'commonjs',
      // libraryExport: 'default',
      library: 'webpackNumbers',
    },
    // externals: {
    //   lodash: {
    //     commonjs: 'lodash',
    //     commonjs2: 'lodash',
    //     amd: 'lodash',
    //     root: '_',
    //   },
    // },
    optimization: {
      splitChunks: { chunks: 'all' },
    },
    module: {
      rules: [
        {
          test: /\.m?jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: { loader: 'babel-loader' },
        },
      ],
    },
  };

  return config;
};
