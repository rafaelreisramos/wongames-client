import { Story, Meta } from '@storybook/react/types-6-0'

import PaymentOptions, { PaymentOptionsProps } from '.'

import cardsMock from './data.mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
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
    },
    handlePayment: {
      action: 'handlePayment'
    }
  }
} as Meta

export const Default: Story<PaymentOptionsProps> = (args) => (
  <div style={{ maxWidth: '40rem' }}>
    <PaymentOptions {...args} />
  </div>
)
