const ExtractTextPlugin = require('extract-text-webpack-plugin');
const paths = require('../constants/paths');

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader', options: { minimize: true }
                    }, {
                        loader: 'sass-loader'
                    }]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(paths.output.cssName)
    ]
};
