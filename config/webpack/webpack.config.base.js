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
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.input.html
        })
    ]
};