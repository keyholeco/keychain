import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from './index'

storiesOf('Organisms/Header', module)
  .add('basic', () => {
    return (
      <Header>
        <Header.Logo />
      </Header>
    )
  })
  .add('backgroundColor', () => {
    return (
      <Header backgroundColor="#26293C">
        <Header.Logo theme="dark" />
      </Header>
    )
  })
