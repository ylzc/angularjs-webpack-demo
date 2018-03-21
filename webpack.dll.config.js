const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    output: {
        // 将会生成./dll/lib.js文件
        path: path.resolve(__dirname, 'src/main/resources/static/dll'),
        filename: '[name].js',
        library: '[name]',
    },
    entry: {
        "lib": [
            'jquery',
            'angular',
            '@uirouter/angularjs',
            'angular-animate',
            'angular-sanitize',
            'oclazyload/dist/modules/ocLazyLoad.core',
            "oclazyload/dist/modules/ocLazyLoad.loaders.core"
        ],
    },
    plugins: [
        new webpack.DllPlugin({
            // 生成的映射关系文件
            path: 'src/main/resources/static/dll/manifest.json',
            name: '[name]',
            context: __dirname,
        }),
        new UglifyJsPlugin(),
    ],
};