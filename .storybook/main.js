module.exports = {
  addons: [
    "@storybook/addon-essentials",
    "storybook-addon-next-router"
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  },
  stories: [
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ]
}
