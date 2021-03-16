import { Story, Meta } from '@storybook/react/types-6-0'

import Radio, { RadioProps } from '.'

export default {
  title: 'Form/Radio',
  component: Radio,
  argTypes: {
    onCheck: { action: 'checked' }
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        name="name"
        id="first"
        label="first"
        labelFor="first"
        value="first"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        name="name"
        id="second"
        label="second"
        labelFor="second"
        value="second"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        name="name"
        id="third"
        label="third"
        labelFor="third"
        value="third"
        {...args}
      />
    </div>
  </>
)
