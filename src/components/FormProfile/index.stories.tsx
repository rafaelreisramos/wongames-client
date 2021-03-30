import { Story, Meta } from '@storybook/react/types-6-0'

import FormProfile from '.'

export default {
  title: 'Form/FormProfile',
  component: FormProfile,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '86rem', margin: '0 auto' }}>
    <FormProfile />
  </div>
)
