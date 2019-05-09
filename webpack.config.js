var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

var basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: ['.js', '.ts']
    },
    entry: [
        '@babel/polyfill',
        './students.ts'
    ],
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
                options: {
                    useBabel: true,
                    "babelCore": "@babel/core", //needed for babel 7
                }
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=5000',
            }, {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader',
            }
        ]
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