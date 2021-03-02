import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined'

import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = { children: 'Button' }

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = { size: 'small', children: 'Button', icon: <AddShoppingCart /> }

export const asLink: Story<ButtonProps> = (args) => <Button {...args} />

asLink.args = { size: 'medium', children: 'Link', as: 'a', href: '/link' }
