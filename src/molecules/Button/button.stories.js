import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button, { buttonSizes, buttonColors } from './index'
import { ucFirst } from '../../utils'

const elStyles = { margin: '.25em' }

storiesOf('Molecules/Button', module)
  .add('basic', () => {
    return (
      <React.Fragment>
        <Button onClick={action('button-click')} style={elStyles}>
          Default Button
        </Button>
        <Button onClick={action('button-click')} style={elStyles} href="#">
          Button Link
        </Button>
      </React.Fragment>
    )
  })
  .add('sizes', () => {
    return (
      <React.Fragment>
        {[...buttonSizes].reverse().map((size) => (
          <Button
            key={`button-${size}`}
            onClick={action('button-click')}
            style={elStyles}
            size={size}
          >
            {ucFirst(size)} Button
          </Button>
        ))}
      </React.Fragment>
    )
  })
  .add('colors', () => {
    return (
      <React.Fragment>
        {buttonColors.map((color) => (
          <Button
            key={`button-${color}`}
            onClick={action('button-click')}
            style={elStyles}
            color={color}
          >
            {ucFirst(color)} Button
          </Button>
        ))}
      </React.Fragment>
    )
  })
  .add('plain', () => {
    return (
      <Button onClick={action('button-click')} plain>
        Plain Button
      </Button>
    )
  })
  .add('rounded', () => {
    return (
      <Button onClick={action('button-click')} rounded>
        Rounded Button
      </Button>
    )
  })
  .add('disabled', () => {
    return (
      <Button onClick={action('button-click')} disabled>
        Disabled Button
      </Button>
    )
  })
  .add('straight', () => {
    return (
      <Button onClick={action('button-click')} straight>
        Straight Button
      </Button>
    )
  })
  .add('outline', () => {
    return (
      <Button onClick={action('button-click')} color="primary" outline>
        Outline Button
      </Button>
    )
  })
  .add('caps', () => {
    return (
      <Button onClick={action('button-click')} caps>
        Caps Button
      </Button>
    )
  })
