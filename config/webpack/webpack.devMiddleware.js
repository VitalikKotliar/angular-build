const webpack = require('webpack'); // eslint-disable-line
const webpackDevMiddleware = require('webpack-dev-middleware'); // eslint-disable-line
const webpackConfig = require('../../webpack.config');

module.exports = (app) => {
    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: '/',
        noInfo: false
    }));
};
