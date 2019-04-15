import React from 'react'
import { storiesOf } from '@storybook/react'

import KeyholeLogo from './index'

const defaultStyles = { display: 'inline-block', padding: '1.5em' }

storiesOf('Atoms/KeyholeLogo', module)
  .add('default', () => (
    <div style={{ ...defaultStyles, backgroundColor: '#FFD433' }}>
      <KeyholeLogo />
    </div>
  ))
  .add('light', () => (
    <div style={{ ...defaultStyles, backgroundColor: '#fff' }}>
      <KeyholeLogo theme="light" />
    </div>
  ))
  .add('dark', () => (
    <div style={{ ...defaultStyles, backgroundColor: '#26293C' }}>
      <KeyholeLogo theme="dark" />
    </div>
  ))
