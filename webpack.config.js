const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const DEV = process.env.NODE_ENV !== "production";
const DIST = "dist";
const DIST_PATH = path.join(__dirname, DIST);

module.exports = {
  entry: "./src/index.js",
  output: {
    path: DIST_PATH,
    publicPath: "/",
    filename: "[name].[hash:8].js"
  },
  target: "web",
  devtool: DEV ? "eval" : false, // 'source-map'
  // devtool: "inline-source-map",
  devServer: {
    contentBase: DIST_PATH,
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: DEV ? "style-loader" : MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("autoprefixer")]
            }
          },
          {
            loader: "sass-loader",
            options: { outputStyle: "compressed" }
          }
        ]
      },
      {
        test: /\.(ico|jpe?g|png|gif|webp|svg|mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash:8].[ext]",
              outputPath: "static/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([`${DIST}/*.*`, `${DIST}/static`], {
      exclude: [".git*"]
    }),
    new HtmlWebpackPlugin({
      template: DEV ? "./src/index.html" : "!!prerender-loader?string!./src/index.html",
      filename: "index.html",
      minify: DEV
        ? false
        : {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
          }
    }),
    new MiniCssExtractPlugin({
      filename: DEV ? "[name].css" : "[name].[hash:8].css",
      chunkFilename: DEV ? "[id].css" : "[id].[hash:8].css"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ]
  }
};
