import { Story, Meta } from '@storybook/react/types-6-0'

import Highlight, { HighlightProps } from '.'

import item from './data.mock'

export default {
  title: 'Highlight',
  component: Highlight,
  argTypes: {
    type: {
      floatImage: 'string'
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
