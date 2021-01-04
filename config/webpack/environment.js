// This affects both development.js and production.js

const {environment, devServer} = require('@rails/webpacker');
const webpack = require('webpack');
const {settings} = require('./configuration');

module.exports = environment;
