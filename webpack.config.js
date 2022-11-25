const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/01-gallery.js",
  output: {
    filename: "output.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  devServer: {
    port: 4444,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "commonOutput.css",
    }),
    new HtmlWebpackPlugin({
      filename: "indexOutput.html",
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "galleryOutput.html",
      template: "src/01-gallery.html",
    }),
    new HtmlWebpackPlugin({
      filename: "videoOutput.html",
      template: "src/02-video.html",
    }),
    new HtmlWebpackPlugin({
      filename: "feedbackOutput.html",
      template: "src/03-feedback.html",
    }),
  ],
};
