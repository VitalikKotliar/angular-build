const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('../constants/paths');

module.exports = {
    entry: {
        app: paths.input.entry
    },
    output: {
        path: paths.output.path,
        filename: paths.output.filename
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015']
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.input.html
        })
    ]
};
