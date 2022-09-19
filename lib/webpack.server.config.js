const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const serverConfig = {
  output: {
    library: {
      type: 'umd',
    },
  },
};

module.exports = webpackMerge.merge(baseConfig, serverConfig);
