import { Story, Meta } from '@storybook/react/types-6-0'

import ExploreSidebar, { ExploreSidebarProps } from '.'

import itemsMock from './data.mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    items: itemsMock
  },
  argTypes: {
    items: {
      type: ''
    },
    initialValues: {
      type: ''
    }
  }
} as Meta

export const Default: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar {...args} />
  </div>
)

export const withInitialValues: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar
      {...args}
      initialValues={{ windows: true, sort_by: 'low-to-high' }}
    />
  </div>
)
