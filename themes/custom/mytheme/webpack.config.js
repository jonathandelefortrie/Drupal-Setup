const path = require("path");
const globImporter = require("node-sass-glob-importer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = (env, argv) => {
  const isDevMode = argv.mode === "development";
  return {
    mode: isDevMode ? "development" : "production",
    devtool: isDevMode ? "source-map" : false,
    entry: {
      main: ["./js/main.js", "./sass/main.scss"]
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: false,
                localIdentName: "[local]___[hash:base64:5]"
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                importer: globImporter(),
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", { modules: false }]]
            }
          }
        }
      ]
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].min.js",
      publicPath: "/assets/"
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new BrowserSyncPlugin({
        host: "localhost",
        port: 3000,
        // Replace proxy url with your local.
        proxy: "http://localhost"
      })
    ]
  };
};
