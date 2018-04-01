// const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  // mode: 'development',
  // mode: 'none',
  entry: {
    filename: './index.js',
  },
  output: {
    filename: './bundle.js',
  },
};
