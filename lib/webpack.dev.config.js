const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');

const PORT = 7777;

const devConfig = {
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    port: PORT,
    host: 'localhost',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = webpackMerge.merge(baseConfig, devConfig);
