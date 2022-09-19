const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const prodConfig = {
  mode: 'production',
  stats: 'minimal',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 2,
      minSize: 100 * 1024,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          minChunks: 2,
          minSize: 50 * 1024,
          test: /(react|react-dom)/,
          priority: 10,
        },
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          minSize: 5 * 1024,
          priority: 0,
        },
      },
    },
  },
};

module.exports = webpackMerge.merge(baseConfig, prodConfig);
