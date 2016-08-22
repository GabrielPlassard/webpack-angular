var path = require("path");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ['./src/app/application.js'],
    output: {
        path: path.resolve(__dirname, "target"),
        filename: "bundle.js"
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './**/*.html', context: './src/app'}
        ], {
            copyUnmodified: true
        })
    ]
};