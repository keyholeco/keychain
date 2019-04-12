import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from './index'
import { H2 } from '../../atoms/Type'

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
          <H2>Custom Text</H2>
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
          <H2>&nbsp; testing</H2>
        </Header.Logo>
      </Header>
    )
  })
