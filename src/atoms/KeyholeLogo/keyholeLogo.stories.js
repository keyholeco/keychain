import React from 'react'

import KeyholeLogo from './index'

export default {
  component: KeyholeLogo,
  title: 'Atoms/Logo',
}

const getMatchingBackgroundColor = (theme) =>
  theme === 'dark'
    ? 'var(--color-dark-blue'
    : theme === 'light'
    ? 'var(--color-white)'
    : 'var(--color-yellow)'

const Template = (args) => (
  <div
    style={{
      display: 'inline-block',
      padding: '1.5em',
      backgroundColor: getMatchingBackgroundColor(args.theme),
    }}
  >
    <KeyholeLogo {...args} />
  </div>
)

export const Logo = Template.bind({})
Logo.args = {
  theme: 'default',
}
