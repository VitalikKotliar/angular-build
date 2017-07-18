const merge = require('webpack-merge');

const baseConfig = require('./config/webpack/webpack.config.base');
const devConfig = require('./config/webpack/webpack.config.dev');
const prodConfig = require('./config/webpack/webpack.config.prod');
const envHelper = require('./config/env.helper');

const specificConfig = (envHelper.isDev()) ? devConfig : prodConfig;

module.exports = merge(baseConfig, specificConfig);
