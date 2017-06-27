const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');

const webpackConfig = require('../../webpack.config');
const paths = require('../constants/paths');

module.exports = (app) => {
    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: paths.output
    }));
};