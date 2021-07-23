import React from 'react'

import Button from './index'
import Icon from '../../atoms/Icon'
import ButtonDocs from './button.docs.mdx'

export default {
  component: Button,
  title: 'Molecules/Button',
  parameters: {
    docs: {
      page: ButtonDocs,
    },
  },
}

const Template = (args) => (
  <Button {...args}>
    Let's Go
    <Icon icon="arrow-right" type="regular" style={{ marginLeft: '0.5em' }} />
  </Button>
)

export const Default = Template.bind({})
