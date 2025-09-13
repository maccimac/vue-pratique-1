module.exports = {
    framework: "@storybook/vue3",
    core: { builder: "webpack5" },
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links']
}
