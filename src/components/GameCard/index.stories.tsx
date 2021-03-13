import { Story, Meta } from '@storybook/react/types-6-0'

import GameCard, { GameCardProps } from '.'

import item from './data.mock'

export default {
  title: 'GameCard',
  component: GameCard,
  args: { ...item },
  argTypes: {
    onFavorite: {
      action: 'favorite clicked'
    },
    ribbon: { type: 'string' }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const withRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

withRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}
