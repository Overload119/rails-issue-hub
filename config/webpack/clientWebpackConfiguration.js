const {merge} = require('webpack-merge');
const environment = require('./environment');
const webpack = require('webpack');

const configureClient = () => {
  // This let's us use jQuery anywhere without calling import(jQuery)
  // This is only on the client since it uses `window`
  environment.plugins.prepend(
    'Provide',
    new webpack.ProvidePlugin({
      $: 'jquery/src/jquery',
      jQuery: 'jquery/src/jquery',
    }),
  );

  environment.splitChunks();
  // More complicated configuration:
  // environment.splitChunks(config =>
  //   Object.assign({}, config, {optimization: {splitChunks: {
  //     chunks: 'all',
  //     name: true,
  //     minSize: 0,
  //     cacheGroups: {
  //     }
  //   }}}),
  // );
  const clientConfigObject = environment.toWebpackConfig();

  // Copy the object using merge b/c the clientConfigObject is non-stop mutable
  // After calling toWebpackConfig, and then modifying the resulting object,
  // another call to `toWebpackConfig` on this same environment will overwrite
  // the next line.
  const clientConfig = merge({}, clientConfigObject);

  // server-bundle is special and should ONLY be built by the serverConfig
  // In case this entry is not deleted, a very strange "window" not found
  // error shows referring to window["webpackJsonp"]. That is because the
  // client config is going to try to load chunks.
  delete clientConfig.entry['server_rendering'];

  return clientConfig;
};

module.exports = configureClient;
