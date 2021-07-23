import React from 'react'

import Icon from './index'

export default {
  component: Icon,
  title: 'Atoms/Icon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1em' }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args) => <Icon {...args} />

export const Basic = Template.bind({})
Basic.args = {
  icon: 'key',
  type: 'solid',
  style: { color: 'var(--color-yellow)' },
}

export const Types = Template.bind({})
Types.args = {
  icon: 'twitter', // ['twitter', 'instagram', 'tiktok', 'facebook-f', 'youtube']
  type: 'brands',
  size: '2x',
  style: { color: 'var(--color-twitter-blue)' },
}

export const Sizes = Template.bind({})
Sizes.args = {
  icon: 'whale',
  type: 'duotone',
  size: '3x',
  style: { color: 'var(--color-purple)' },
}

export const FixedWidth = Template.bind({})
FixedWidth.args = {
  icon: 'facebook-f',
  type: 'brands',
  size: '4x',
  fixed: true,
  style: { color: 'var(--color-facebook-blue)' },
}
