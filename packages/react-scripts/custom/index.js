'use strict';

const webpackLoaders = [
  {
    test: /\.styl$/,
    loader: 'style-loader!css-loader!stylus-loader',
  },
]

const babelPresets = require.resolve('babel-preset-stage-0')

const config = {
  webpackLoaders,
  babelPresets,
}

module.exports = config
