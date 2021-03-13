import { Story, Meta } from '@storybook/react/types-6-0'

import Banner, { BannerProps } from '.'

import item from './data.mock'

export default {
  title: 'Banner',
  component: Banner,
  argTypes: {
    ribbon: {
      type: 'string'
    }
  },
  args: { ...item },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)

export const withRibbon: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)

withRibbon.args = {
  ribbon: '20% off',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}
