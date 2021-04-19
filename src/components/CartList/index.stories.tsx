import { Story, Meta } from '@storybook/react/types-6-0'

import CartList from '.'

import gamesMock from './data.mock'

export default {
  title: 'Cart/CartList',
  component: CartList,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    cartContextValue: {
      type: ''
    },
    items: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <CartList {...args} />
  </div>
)
Default.args = {
  cartContextValue: {
    items: gamesMock
  },
  total: 'R$ 430,00'
}

export const withButton: Story = (args) => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <CartList {...args} hasLink />
  </div>
)
withButton.args = {
  cartContextValue: {
    items: gamesMock
  },
  total: 'R$ 430,00'
}
withButton.argTypes = {
  hasLink: {
    type: ''
  }
}

export const Empty: Story = () => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <CartList />
  </div>
)
