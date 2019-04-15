import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from './index'
import { Type } from '../../../dist'

storiesOf('Organisms/Header.Section', module)
  .add('basic', () => {
    return (
      <Header>
        <Header.Logo />
        <Header.Section>
          <Type>Here is another section on the header</Type>
        </Header.Section>
      </Header>
    )
  })
  .add('alignment', () => {
    return (
      <Header>
        <Header.Logo />
        <Header.Section align="right">
          <Type>Here is another section on the header</Type>
        </Header.Section>
      </Header>
    )
  })
  .add('vertical alignment', () => {
    return (
      <Header>
        <Header.Logo />
        <Header.Section align="center" verticalAlign="middle">
          <Type>Here is another section on the header</Type>
        </Header.Section>
      </Header>
    )
  })
