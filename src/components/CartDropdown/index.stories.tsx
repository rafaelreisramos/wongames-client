import { Story, Meta } from '@storybook/react/types-6-0'

import CartDropdown, { CartDropdownProps } from '.'
import itemsMock from 'components/CartList/data.mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    items: itemsMock,
    total: 'R$ 430,00'
  }
} as Meta

export const Default: Story<CartDropdownProps> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
)
