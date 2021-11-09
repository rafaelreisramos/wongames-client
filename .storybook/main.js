module.exports = {
  addons: [
    "@storybook/addon-essentials",
    "storybook-addon-next-router"
  ],
  features: {
    postcss: false
  },
  stories: [
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
