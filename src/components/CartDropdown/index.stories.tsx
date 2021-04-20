import { Story, Meta } from '@storybook/react/types-6-0'

import CartDropdown from '.'
import itemsMock from 'components/CartList/data.mock'

export default {
  title: 'Cart/CartDropdown',
  component: CartDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
)

Default.args = {
  cartContextValue: {
    items: itemsMock,
    total: 'R$ 430,00'
  }
}
Default.argTypes = {
  cartContextValue: {
    type: ''
  }
}
