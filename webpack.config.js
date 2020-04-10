const path = require('path');

module.exports = (env, argv) => {
  const config = {
    // mode: 'production',
    mode: 'development',
    entry: './index.js',
    output: {
      // path: path.resolve(__dirname, './dist'),
      filename: 'webpack-numbers.js',
      libraryTarget: 'umd',
      // libraryTarget: 'commonjs',
      // libraryTarget: 'commonjs2',
      // globalObject: 'this',
      // globalObject: 'global',
      libraryExport: 'default',
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
    devtool: 'source-map',
    optimization: {
      runtimeChunk: true,
      // splitChunks: { chunks: 'all' },
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
