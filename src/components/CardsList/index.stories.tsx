import { Story, Meta } from '@storybook/react/types-6-0'

import CardsList, { CardsListProps } from '.'
import cardsMock from 'components/PaymentOptions/data.mock'

export default {
  title: 'Profile/CardsList',
  component: CardsList,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    cards: cardsMock
  },
  argTypes: {
    cards: {
      type: ''
    }
  }
} as Meta

export const Default: Story<CardsListProps> = (args) => (
  <div style={{ maxWidth: '85rem', margin: '0 auto' }}>
    <CardsList {...args} />
  </div>
)
