// Below code should get refactored but the current way that rails/webpacker v5
// does the globals, it's tricky
const environment = require('./environment');
const webpackConfig = require('./webpackConfig');

const productionOnly = () => {
  // place any code here that is for production only

  environment.loaders.append('webpack-strip-block', {
    test: /\.jsx?(\.erb)?$/,
    enforce: 'pre',
    exclude: /(node_modules|bower_components|\.spec\.js)/,
    use: {
      loader: 'webpack-strip-block',
    },
  });

  return {
    isProduction: true,
  };
};

module.exports = webpackConfig(productionOnly);
