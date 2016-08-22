var path = require("path");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ['./src/app/application.js'],
    output: {
        path: path.resolve(__dirname, "target", "app"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    devtool: 'source-map',
    module: {
        loaders: [{test: /\.ts$/,loader: 'ts-loader'}]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './**/*.html', context: './src/app'}
        ], {
            copyUnmodified: true
        })
    ]
};