var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/js');
var APP_DIR = path.resolve(__dirname, 'app/');

var config = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080', // Setting the URL for the hot reload
        'webpack/hot/only-dev-server',
        APP_DIR + '/index.jsx'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css' // We add the css loader
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: BUILD_DIR,
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() // Wire in the hot loading plugin
    ]
};

module.exports = config;