import React from 'react'
import { storiesOf } from '@storybook/react'

import Icon, { iconSizes } from './index'
import { Type, H1 } from '../../../dist'

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
  .add('sizes', () => (
    <Type style={parentStyles}>
      {[...iconSizes].reverse().map((size) => (
        <div key={`icon-size-${size}`}>
          <span style={labelStyles}>{size}:</span>
          <Icon icon="users" size={size} style={iconStyles} />
        </div>
      ))}
    </Type>
  ))
  .add('fixed width', () => (
    <H1 style={parentStyles}>
      <div>
        <Icon icon="users" type="solid" style={iconStyles} fixed />
      </div>
      <div>
        <Icon icon="users" type="regular" style={iconStyles} fixed />
      </div>
      <div>
        <Icon icon="users" type="light" style={iconStyles} fixed />
      </div>
    </H1>
  ))
