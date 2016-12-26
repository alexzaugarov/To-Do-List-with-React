var path = require("path");

module.exports = {
    entry: path.join(__dirname, "App", "main.jsx"),
    output: {
        path: __dirname + "/wwwroot/builds/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            include: path.join(__dirname, "App"),
            loader: "babel",
            query: {
                presets: ["es2015", "react"]
            }
        }]
    }
};