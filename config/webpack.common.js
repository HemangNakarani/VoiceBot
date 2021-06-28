const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    content: path.join(__dirname, "../src/content.tsx"),
    background: path.join(__dirname, "../src/background.ts"),
    popup: path.join(__dirname, "../src/popup.tsx"),
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "static/js/[name].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../public"),
        },
        {
          from: path.resolve(__dirname, "../src/extension.css"),
          to: path.resolve(__dirname, "../dist/static/css/extension.css"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].css",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "static/assets/",
            publicPath: "static/assets/",
          },
        },
      },
    ],
  },
};
