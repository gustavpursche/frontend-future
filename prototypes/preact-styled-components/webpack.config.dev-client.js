const { publicPath, assetsPath, commonLoaders, resolve } = require('./webpack.common.config');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'eval',
  name: 'client',
  entry: './client.js',
  output: {
    path: assetsPath,
    publicPath,
    filename: 'bundle.js',
  },
  module: {
    rules: commonLoaders,
  },
  resolve,
};
