//配置文件
const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: path.join(__dirname, "./src/main.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js"
    },
    // devServer: {
    //     open: true,
    //     port: 1000,
    //     contentBase: "src",
    //     hot: true
    // },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html"),
            filename: "index.html"
        })
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] }
        ]
    }
}