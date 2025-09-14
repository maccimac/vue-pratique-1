module.exports = {
    framework: "@storybook/vue3",
    core: { builder: "webpack5" },
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
    staticDirs: ['../../public'],
    webpackFinal: async (config) => {
    // Add SCSS support for Vue SFCs and standalone .scss files
    config.module.rules.push({
      test: /\.scss$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: { sourceMap: true },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            implementation: require('sass'),
          },
        },
      ],
    });

    return config;
  },
}
