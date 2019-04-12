import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from './index'

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
