import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from './index'

storiesOf('Organisms/Header', module).add('basic', () => {
  return (
    <Header>
      <Header.Logo />
    </Header>
  )
})
