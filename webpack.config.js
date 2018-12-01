const fs = require('fs');
const path = require('path');
const nodeModules = {};

fs
  .readdirSync('node_modules')
  .forEach(function(mod) {
    if (mod !== '.bin') {
      nodeModules[mod] = 'commonjs ' + mod;
    }
  });

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  node: {
    fs: 'empty',
    __dirname: true,
    __filename: true,
  },
  externals: nodeModules,
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  }
};
