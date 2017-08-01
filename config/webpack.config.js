const path = require('path');

const { baseComponentDir, publicDir, srcDir } = require('./paths');

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      include: baseComponentDir,
      use: ['babel-loader']
    }, {
      test: /\.less$/,
      include: [path.join(srcDir, 'styles'), baseComponentDir],
      use: ['style-loader', 'css-loader', 'less-loader']
    }, {
      test: /\.eot$|\.ttf$|\.svg$|\.woff$/,
      include: [
        path.join(publicDir, 'webfonts'),
        path.join(publicDir, 'images')
      ],
      use: ['file-loader']
    }]
  }
};
