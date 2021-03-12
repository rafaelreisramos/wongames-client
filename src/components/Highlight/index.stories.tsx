import { Story, Meta } from '@storybook/react/types-6-0'

import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  argTypes: {
    type: {
      floatImage: 'string'
    }
  },
  args: {
    backgroundImage: '/img/red-dead-img.jpg',
    title: `Read Dead it's back`,
    subtitle: `Come see John's new adventures`,
    buttonLabel: 'Buy now',
    buttonLink: '/games/read-dead'
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
)

export const withFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
)

withFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
