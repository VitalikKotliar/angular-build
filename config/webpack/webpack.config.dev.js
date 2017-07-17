const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader', options: { sourceMap: true }
                }, {
                    loader: 'sass-loader'
                }]
            }
        ]
    },
    devtool: 'source-map'
};