const path = require('path');

const root = path.resolve(__dirname, '../..');

module.exports = {
    input: {
        entry: path.join(root, '/src/index.js'),
        html: path.join(root, './src/index.html')
    },
    output: {
        path: path.join(root, '/dist'),
        filename: '[name].bundle.js'
    }
};