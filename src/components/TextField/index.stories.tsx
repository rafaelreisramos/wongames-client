import { Story, Meta } from '@storybook/react/types-6-0'
import { Email } from '@styled-icons/material-outlined'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    id: 'email',
    label: 'E-mail',
    labelFor: 'email',
    icon: <Email />,
    initialValue: '',
    placeholder: 'john.doe@gmail.com'
  },
  argTypes: {
    onInput: { action: 'typed text' },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const withError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

withError.args = {
  error: 'Ops... something is wrong'
}
