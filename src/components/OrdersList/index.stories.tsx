import { Story, Meta } from '@storybook/react/types-6-0'

import OrdersList, { OrdersListProps } from '.'
import ordersMock from './data.mock'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    items: ordersMock
  }
} as Meta

export const Default: Story<OrdersListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
)
