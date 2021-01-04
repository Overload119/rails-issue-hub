module.exports = {
  test: /\.jsx?(\.erb)?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-flow',
      ],
      plugins: [
        '@babel/plugin-transform-parameters',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-optional-chaining',
        process.env.WEBPACK_DEV_SERVER && 'react-refresh/babel',
      ].filter(Boolean),
    },
  },
};
