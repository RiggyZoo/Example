import React from 'react'
import { Story } from '@storybook/react'
import { InputProps, Input } from 'generic/Input/Input'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {},
}

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})

Default.args = { label: 'Login:', required: true }
