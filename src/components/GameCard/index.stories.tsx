import { Story, Meta } from '@storybook/react/types-6-0'

import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Red Dead II',
    developer: 'Rockstar Games',
    img: 'img/red-dead-img.jpg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 195,00'
  },
  argTypes: {
    onFavorite: {
      action: 'favorite clicked'
    },
    ribbon: { type: 'string' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
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
