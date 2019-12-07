const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    contentBase: "./dist",
    filename: "index.html",
    lazy: true
  },
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "ts-loader",
        test: /.tsx?$/
      }
    ]
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./dist")
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html"
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: [
      "node_modules",
      "./node_modules",
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "src")
    ]
  }
};
