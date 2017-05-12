
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client/client.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: 'client',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: path.resolve(__dirname, './node_modules/babel-loader'),
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
};
