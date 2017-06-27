const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('../constants/paths');

module.exports = {
    entry: paths.input,
    output: {
        filename: 'bundle.js',
        path: paths.output,
        publicPath: '/'
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
            template: './src/index.html'
        })
    ]
};