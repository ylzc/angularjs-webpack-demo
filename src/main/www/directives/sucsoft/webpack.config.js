// webpack.config.js
var webpack = require('webpack');
var path = require('path');
var libraryName = 'library';
var outputFile = libraryName + '.js';
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");

var config = {
    entry: __dirname + '/plugins/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /(\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    resolve: {
        modules: [path.resolve('./plugins')],
        extensions: ['.json', '.js']
    },
    externals: {
        'angular':"angular" ,
        "angular-sanitize":"angular-sanitize",
        "angular-animate":"angular-animate"
    },
    plugins:[
        new UglifyJsPlugin()
    ]
};

module.exports = config;