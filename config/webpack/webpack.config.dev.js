module.exports = {
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
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
