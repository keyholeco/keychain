import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object, optionsKnob, boolean } from '@storybook/addon-knobs'

import Icon, { iconTypes, iconSizes } from './index'
import { Type, H1 } from '../../../dist'

const parentStyles = { color: '#26293C' }
const iconStyles = { margin: '0.25em' }
const labelStyles = { display: 'inline-block', width: '150px', textAlign: 'right' }

const iconTypesObj = iconTypes.reduce((prev, curr) => {
  prev[curr] = curr
  return prev
}, {})

const iconSizesObj = iconSizes.reduce((prev, curr) => {
  prev[curr] = curr
  return prev
}, {})

const optionsKnobOptions = {
  display: 'select',
}

storiesOf('Atoms/Icon', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    return (
      <H1 style={parentStyles}>
        <Icon
          className={text('className', '')}
          style={object('style', iconStyles)}
          icon={text('icon', 'users')}
          type={optionsKnob('type', iconTypesObj, 'solid', optionsKnobOptions)}
          size={optionsKnob('size', iconSizesObj, 'lg', optionsKnobOptions)}
          fixed={boolean('fixed', false)}
        />
      </H1>
    )
  })
  .add('brands', () => {
    return (
      <H1 style={parentStyles}>
        <Icon
          className={text('className', '')}
          style={object('style', iconStyles)}
          type={optionsKnob('type', iconTypesObj, 'brands', optionsKnobOptions)}
          size={optionsKnob('size', iconSizesObj, 'lg', optionsKnobOptions)}
          fixed={boolean('fixed', false)}
          icon={text('icon 1', 'twitter')}
        />
        <Icon
          className={text('className', '')}
          style={object('style', iconStyles)}
          type={optionsKnob('type', iconTypesObj, 'brands', optionsKnobOptions)}
          size={optionsKnob('size', iconSizesObj, 'lg', optionsKnobOptions)}
          fixed={boolean('fixed', false)}
          icon={text('icon 2', 'instagram')}
        />
        <Icon
          className={text('className', '')}
          style={object('style', iconStyles)}
          type={optionsKnob('type', iconTypesObj, 'brands', optionsKnobOptions)}
          size={optionsKnob('size', iconSizesObj, 'lg', optionsKnobOptions)}
          fixed={boolean('fixed', false)}
          icon={text('icon 3', 'facebook')}
        />
        <Icon
          className={text('className', '')}
          style={object('style', iconStyles)}
          type={optionsKnob('type', iconTypesObj, 'brands', optionsKnobOptions)}
          size={optionsKnob('size', iconSizesObj, 'lg', optionsKnobOptions)}
          fixed={boolean('fixed', false)}
          icon={text('icon 4', 'youtube')}
        />
      </H1>
    )
  })
  .add('types', () => (
    <H1 style={parentStyles}>
      <div>
        <span style={labelStyles}>Solid:</span>
        <Icon
          className={text('className', '')}
          style={object('style', iconStyles)}
          icon={text('icon', 'users')}
          size={optionsKnob('size', iconSizesObj, 'lg', optionsKnobOptions)}
          fixed={boolean('fixed', false)}
          type={optionsKnob('type 1', iconTypesObj, 'solid', optionsKnobOptions)}
        />
      </div>
      <div>
        <span style={labelStyles}>Regular:</span>
        <Icon
          className={text('className', '')}
          style={object('style', iconStyles)}
          icon={text('icon', 'users')}
          size={optionsKnob('size', iconSizesObj, 'lg', optionsKnobOptions)}
          fixed={boolean('fixed', false)}
          type={optionsKnob('type 2', iconTypesObj, 'regular', optionsKnobOptions)}
        />
      </div>
      <div>
        <span style={labelStyles}>Light:</span>
        <Icon
          className={text('className', '')}
          style={object('style', iconStyles)}
          icon={text('icon', 'users')}
          size={optionsKnob('size', iconSizesObj, 'lg', optionsKnobOptions)}
          fixed={boolean('fixed', false)}
          type={optionsKnob('type 3', iconTypesObj, 'light', optionsKnobOptions)}
        />
      </div>
    </H1>
  ))
  .add('sizes', () => (
    <Type style={parentStyles}>
      {[...iconSizes].reverse().map((size) => (
        <div key={`icon-size-${size}`}>
          <span style={labelStyles}>{size}:</span>
          <Icon
            className={text('className', '')}
            style={object('style', iconStyles)}
            icon={text('icon', 'users')}
            type={optionsKnob('type', iconTypesObj, 'solid', optionsKnobOptions)}
            fixed={boolean('fixed', false)}
            size={optionsKnob(`size ${size}`, iconSizesObj, size, optionsKnobOptions)}
          />
        </div>
      ))}
    </Type>
  ))
  .add('fixed width', () => (
    <H1 style={parentStyles}>
      <div>
        <Icon
          className={text('className', '')}
          style={object('style', iconStyles)}
          icon={text('icon', 'users')}
          size={optionsKnob('size', iconSizesObj, 'lg', optionsKnobOptions)}
          fixed={boolean('fixed', true)}
          type={optionsKnob('type 1', iconTypesObj, 'solid', optionsKnobOptions)}
        />
      </div>
      <div>
        <Icon
          className={text('className', '')}
          style={object('style', iconStyles)}
          icon={text('icon', 'users')}
          size={optionsKnob('size', iconSizesObj, 'lg', optionsKnobOptions)}
          fixed={boolean('fixed', true)}
          type={optionsKnob('type 2', iconTypesObj, 'regular', optionsKnobOptions)}
        />
      </div>
      <div>
        <Icon
          className={text('className', '')}
          style={object('style', iconStyles)}
          icon={text('icon', 'users')}
          size={optionsKnob('size', iconSizesObj, 'lg', optionsKnobOptions)}
          fixed={boolean('fixed', true)}
          type={optionsKnob('type 3', iconTypesObj, 'light', optionsKnobOptions)}
        />
      </div>
    </H1>
  ))
