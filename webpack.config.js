var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: [
        '@babel/polyfill',
        './students.js'
    ],
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', //file in /dist
            template: 'index.html',
            hash: true,
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            JQuery: "jquery",
        })
    ]
}