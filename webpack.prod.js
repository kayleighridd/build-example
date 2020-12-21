const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const paths = {
  // Source files
  src: path.resolve(__dirname, "./src"),

  // Production build files
  build: path.resolve(__dirname, "./dist"),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, "./public"),
};

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + "/index.js"],
  mode: "production",
  devtool: false,
  output: {
    path: paths.build,
    publicPath: "/",
    filename: "js/[name].[contenthash].bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: false,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },

      // Images: Copy image files to build folder
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: "asset/inline" },
    ],
  },
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Extracts CSS into separate files
    // Note: style-loader is for development, MiniCssExtractPlugin is for production
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
      chunkFilename: "[id].css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), "..."],
    // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
    // instead of having their own. This also helps with long-term caching, since the chunks will only
    // change when actual code changes, not the webpack runtime.
    runtimeChunk: {
      name: "runtime",
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
