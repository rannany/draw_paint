var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './js/main.js',
    watch: true,
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['es2015']
                }
              }
            },
            {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
