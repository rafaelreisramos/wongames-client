import { Story, Meta } from '@storybook/react/types-6-0'

import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    img: 'https://source.unsplash.com/151x70',
    title: 'Red Dead Redemption 2',
    price: 'R$ 225,00'
  }
} as Meta

export const Default: Story<GameItemProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameItem {...args} />
  </div>
)

export const withPayment: Story<GameItemProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameItem {...args} />
  </div>
)

withPayment.args = {
  downloadLink: 'https://wongames.com/game/download/game-name',
  paymentInfo: {
    number: '**** **** **** 1234',
    flag: 'mastercard',
    img: '/img/cards/mastercard.png',
    purchaseDate: 'Purchase made on 03/26/2021 at 10:00'
  }
}
