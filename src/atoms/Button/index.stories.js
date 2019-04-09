import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button, { buttonSizes, buttonColors } from './index'
import { ucFirst } from '../../utils'

const parentStyles = { display: 'flex', alignItems: 'center', flexWrap: 'wrap' }
const elStyles = { margin: '.25em' }

storiesOf('Atoms/Button', module)
  .add('basic', () => {
    return (
      <div style={parentStyles}>
        <Button onClick={action('button-click')} style={elStyles}>
          Default Button
        </Button>
        <Button onClick={action('button-click')} style={elStyles} href="#">
          Button Link
        </Button>
      </div>
    )
  })
  .add('sizes', () => {
    return (
      <div style={parentStyles}>
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
      </div>
    )
  })
  .add('colors', () => {
    return (
      <div style={parentStyles}>
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
      </div>
    )
  })
  .add('plain', () => {
    return (
      <div style={parentStyles}>
        <Button onClick={action('button-click')} style={elStyles} plain>
          Plain Button
        </Button>
      </div>
    )
  })
  .add('rounded', () => {
    return (
      <div style={parentStyles}>
        <Button onClick={action('button-click')} style={elStyles} rounded>
          Rounded Button
        </Button>
      </div>
    )
  })
  .add('disabled', () => {
    return (
      <div style={parentStyles}>
        <Button onClick={action('button-click')} style={elStyles} disabled>
          Disabled Button
        </Button>
      </div>
    )
  })
  .add('straight', () => {
    return (
      <div style={parentStyles}>
        <Button onClick={action('button-click')} style={elStyles} straight>
          Straight Button
        </Button>
      </div>
    )
  })
  .add('outline', () => {
    return (
      <div style={parentStyles}>
        <Button onClick={action('button-click')} style={elStyles} color="primary" outline>
          Outline Button
        </Button>
      </div>
    )
  })
  .add('caps', () => {
    return (
      <div style={parentStyles}>
        <Button onClick={action('button-click')} style={elStyles} caps>
          Caps Button
        </Button>
      </div>
    )
  })
