const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackChromeExtensionReloader = require("webpack-chrome-extension-reloader");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new WebpackChromeExtensionReloader({
      entries: {
        contentScript: "content",
        background: "background",
      },
    }),
    new HtmlWebpackPlugin({
      filename: "popup.html",
      template: path.resolve(__dirname, "../src/popup.html"),
      inject: false,
    }),
  ],
});
