import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, object, optionsKnob, boolean } from '@storybook/addon-knobs'

import Button, { buttonSizes, buttonColors } from './index'
import Icon, { iconTypes } from '../../atoms/Icon'

import { ucFirst } from '../../utils'

const elStyles = { margin: '.25em' }

const buttonSizesObj = buttonSizes.reduce((prev, curr) => {
  prev[curr] = curr
  return prev
}, {})

const buttonColorsObj = buttonColors.reduce((prev, curr) => {
  prev[curr] = curr
  return prev
}, {})

const iconTypesObj = iconTypes.reduce((prev, curr) => {
  prev[curr] = curr
  return prev
}, {})

const optionsKnobOptions = {
  display: 'select',
}

storiesOf('Molecules/Button', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    const props = {
      className: text('className', ''),
      style: object('style', elStyles),
      plain: boolean('plain', false),
      rounded: boolean('rounded', false),
      disabled: boolean('disabled', false),
      straight: boolean('straight', false),
      outline: boolean('outline', false),
      caps: boolean('caps', false),
      size: optionsKnob('size', buttonSizesObj, 'medium', optionsKnobOptions),
      color: optionsKnob('color', buttonColorsObj, 'default', optionsKnobOptions),
    }

    return (
      <React.Fragment>
        <Button onClick={action('button-click')} {...props}>
          Default Button
        </Button>
        <Button onClick={action('button-click')} href="#" {...props}>
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
            style={object('style', elStyles)}
            size={optionsKnob(`size ${size}`, buttonSizesObj, size, optionsKnobOptions)}
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
            style={object('style', elStyles)}
            color={optionsKnob(`color ${color}`, buttonColorsObj, color, optionsKnobOptions)}
          >
            {ucFirst(color)} Button
          </Button>
        ))}
      </React.Fragment>
    )
  })
  .add('plain', () => {
    return (
      <Button onClick={action('button-click')} plain={boolean('plain', true)}>
        Plain Button
      </Button>
    )
  })
  .add('rounded', () => {
    return (
      <Button onClick={action('button-click')} rounded={boolean('rounded', true)}>
        Rounded Button
      </Button>
    )
  })
  .add('disabled', () => {
    return (
      <Button onClick={action('button-click')} disabled={boolean('disabled', true)}>
        Disabled Button
      </Button>
    )
  })
  .add('straight', () => {
    return (
      <Button onClick={action('button-click')} straight={boolean('straight', true)}>
        Straight Button
      </Button>
    )
  })
  .add('outline', () => {
    return (
      <Button
        onClick={action('button-click')}
        color={optionsKnob('color', buttonColorsObj, 'primary', optionsKnobOptions)}
        outline={boolean('outline', true)}
      >
        Outline Button
      </Button>
    )
  })
  .add('caps', () => {
    return (
      <Button onClick={action('button-click')} caps={boolean('caps', true)}>
        Caps Button
      </Button>
    )
  })
  .add('with Icon', () => {
    const props = {
      className: text('className', ''),
      style: object('style', elStyles),
      plain: boolean('plain', false),
      rounded: boolean('rounded', false),
      disabled: boolean('disabled', false),
      straight: boolean('straight', false),
      outline: boolean('outline', false),
      caps: boolean('caps', false),
      size: optionsKnob('size', buttonSizesObj, 'medium', optionsKnobOptions),
      color: optionsKnob('color', buttonColorsObj, 'default', optionsKnobOptions),
    }

    return (
      <React.Fragment>
        <Button onClick={action('button-click')} {...props}>
          <Icon
            icon={text('icon-1', 'arrow-left')}
            type={optionsKnob('type', iconTypesObj, 'regular', optionsKnobOptions)}
            fixed={false}
            style={{ marginRight: '0.5em' }}
          />
          Default Button
        </Button>
        <Button onClick={action('button-click')} href="#" {...props}>
          Button Link
          <Icon
            icon={text('icon-2', 'arrow-right')}
            type={optionsKnob('type', iconTypesObj, 'regular', optionsKnobOptions)}
            fixed={false}
            style={{ marginLeft: '0.5em' }}
          />
        </Button>
      </React.Fragment>
    )
  })
