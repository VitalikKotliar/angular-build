const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../../webpack.config');

module.exports = (app) => {
    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: '/',
        noInfo: false
    }));
};