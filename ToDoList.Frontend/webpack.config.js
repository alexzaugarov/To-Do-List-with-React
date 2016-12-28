var path = require("path");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "src", "app", "main.jsx"),
    output: {
        path: __dirname + "/wwwroot/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./wwwroot",
        hot: true
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            include: path.join(__dirname, "src"),
            loader: "babel",
            query: {
                presets: ["es2015", "react"]
            }
        }]
    },
    plugins:[
        new CopyWebpackPlugin([{ from: './src/index.html' }])
    ]
};