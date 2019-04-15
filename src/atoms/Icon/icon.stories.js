import React from 'react'
import { storiesOf } from '@storybook/react'

import Icon from './index'
import { H1 } from '../../../dist'

const parentStyles = { color: '#26293C' }
const iconStyles = { margin: '0.25em' }
const labelStyles = { display: 'inline-block', width: '150px', textAlign: 'right' }

storiesOf('Atoms/Icon', module)
  .add('basic', () => (
    <H1 style={parentStyles}>
      <Icon icon="users" />
    </H1>
  ))
  .add('brands', () => (
    <H1 style={parentStyles}>
      <Icon icon="twitter" type="brands" style={iconStyles} />
      <Icon icon="instagram" type="brands" style={iconStyles} />
      <Icon icon="facebook" type="brands" style={iconStyles} />
      <Icon icon="youtube" type="brands" style={iconStyles} />
    </H1>
  ))
  .add('types', () => (
    <H1 style={parentStyles}>
      <div>
        <span style={labelStyles}>Solid:</span>
        <Icon icon="users" type="solid" style={iconStyles} />
      </div>
      <div>
        <span style={labelStyles}>Regular:</span>
        <Icon icon="users" type="regular" style={iconStyles} />
      </div>
      <div>
        <span style={labelStyles}>Light:</span>
        <Icon icon="users" type="light" style={iconStyles} />
      </div>
    </H1>
  ))
