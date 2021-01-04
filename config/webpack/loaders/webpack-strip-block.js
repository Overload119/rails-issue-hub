module.exports = {
  test: /\.jsx?(\.erb)?$/,
  enforce: 'pre',
  exclude: /(node_modules|bower_components|\.spec\.js)/,
  use: {
    loader: 'webpack-strip-block',
  },
};
