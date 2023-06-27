const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "none",
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    library: {
      type: "umd",
      name: "WebpackDemo",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  externals: {
    react: "react", //这里偷懒了
    "react/jsx-runtime": "react/jsx-runtime",
  },
  module: {
    rules: [
      {
        test: /((\.scss)|(\.module\.scss))$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      stage: 3,
                      autoprefixer: {
                        flexbox: "no-2009",
                      },
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /((\.jsx)|(\.js))/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].[contenthash:8].css",
    }),
  ],
  optimization: {
    //测试tree-shaking
    usedExports: true,
    minimize: true,
  },
};
