const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.handlebars$/,
      loader: "handlebars-loader",
    });

    config.module.rules.push({
      test: /\.(scss|css)$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: { sourceMap: true, importLoaders: 1 },
        },
        { loader: "postcss-loader", options: { sourceMap: true } },
        { loader: "sass-loader", options: { sourceMap: true } },
      ],
    });

    // Return the altered config
    return config;
  },
};
