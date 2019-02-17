const webpack = require("webpack");

module.exports = {
  entry: ["./polyfills", "react-hot-loader/patch", "./index.web.js"],
  devServer: {
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          babelrc: false,
          presets: [
            "@babel/env",
            "react",
            "module:metro-react-native-babel-preset"
          ],
          plugins: ["react-hot-loader/babel"]
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[path][name]__[local]--[hash:base64:5]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      "react-native": "react-native-web"
    },
    extensions: [".web.js", ".js", ".web.jsx", ".jsx"],
    mainFields: ["browser", "main"]
  }
};
