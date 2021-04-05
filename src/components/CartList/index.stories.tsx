import { Story, Meta } from '@storybook/react/types-6-0'

import CartList, { CartListProps } from '.'

import gamesMock from './data.mock'

export default {
  title: 'CartList',
  component: CartList,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    items: gamesMock,
    total: 'R$ 430,00'
  },
  argTypes: {
    items: {
      type: ''
    }
  }
} as Meta

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <CartList {...args} />
  </div>
)

export const withButton: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <CartList {...args} hasLink />
  </div>
)

export const Empty: Story<CartListProps> = () => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <CartList hasLink />
  </div>
)
