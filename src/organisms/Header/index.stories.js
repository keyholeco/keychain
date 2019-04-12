import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import Header from './index'

storiesOf('Organisms/Header', module).add('basic', () => {
  return (
    <Header>
      <Header.Logo />
    </Header>
  )
})

storiesOf('Organisms/Header.Logo', module)
  .add('basic', () => {
    return (
      <Header>
        <Header.Logo />
      </Header>
    )
  })
  .add('custom text', () => {
    return (
      <Header>
        <Header.Logo theme="custom">
          <h1>Custom Text</h1>
        </Header.Logo>
      </Header>
    )
  })
  .add('custom image', () => {
    return (
      <Header>
        <Header.Logo
          theme="custom"
          src="https://cdn.keyhole.co/user_logos/37_logo.png?v=1442235000"
        />
      </Header>
    )
  })
  .add('white-labelling', () => {
    return (
      <Header backgroundColor="purple">
        <Header.Logo
          theme="custom"
          src="https://cdn.keyhole.co/user_logos/37_logo.png?v=1442235000"
        >
          <h1>&nbsp; testing</h1>
        </Header.Logo>
      </Header>
    )
  })

storiesOf('Organisms/Header.Section', module)
  .add('basic', () => {
    return (
      <Header>
        <Header.Logo />
        <Header.Section>Here is another section on the header</Header.Section>
      </Header>
    )
  })
  .add('alignment', () => {
    return (
      <Header>
        <Header.Logo />
        <Header.Section align="right">Here is another section on the header</Header.Section>
      </Header>
    )
  })
  .add('vertical alignment', () => {
    return (
      <Header>
        <Header.Logo />
        <Header.Section align="center" verticalAlign="middle">
          Here is another section on the header
        </Header.Section>
      </Header>
    )
  })
