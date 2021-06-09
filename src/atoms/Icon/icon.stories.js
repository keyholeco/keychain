import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object, optionsKnob, boolean } from '@storybook/addon-knobs'

import Icon, { iconTypes, iconSizes } from './index'
import { H1, Type } from '../Type'

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
        {['key', 'whale', 'tablet-android-alt'].map((icon, index) => (
          <Icon
            key={`basic-${icon}`}
            className={text('className', '')}
            style={object('style', iconStyles)}
            icon={text(`icon ${index}`, icon)}
            type={optionsKnob('type', iconTypesObj, 'solid', optionsKnobOptions)}
            size={optionsKnob('size', iconSizesObj, 'lg', optionsKnobOptions)}
            fixed={boolean('fixed', false)}
          />
        ))}
      </H1>
    )
  })
  .add('brands', () => {
    return (
      <H1 style={parentStyles}>
        {['twitter', 'instagram', 'tiktok', 'facebook-f', 'youtube'].map((icon, index) => (
          <Icon
            key={`brands-${icon}`}
            className={text('className', '')}
            style={object('style', iconStyles)}
            type={optionsKnob('type', iconTypesObj, 'brands', optionsKnobOptions)}
            size={optionsKnob('size', iconSizesObj, 'lg', optionsKnobOptions)}
            fixed={boolean('fixed', false)}
            icon={text(`icon ${index + 1}`, icon)}
          />
        ))}
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
          icon={text('icon', 'kiwi-bird')}
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
          icon={text('icon', 'kiwi-bird')}
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
          icon={text('icon', 'kiwi-bird')}
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
            icon={text('icon', 'projector')}
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
        {['solid', 'regular', 'light'].map((weight) => (
          <Icon
            key={`1-${weight}`}
            className={text('className', '')}
            style={object('style', iconStyles)}
            icon={text(`icon 1 ${weight}`, 'mug-tea')}
            size={optionsKnob('size', iconSizesObj, 'lg', optionsKnobOptions)}
            fixed={boolean('fixed', true)}
            type={optionsKnob(`type 1 ${weight}`, iconTypesObj, weight, optionsKnobOptions)}
          />
        ))}
      </div>
      <div>
        {['solid', 'regular'].map((weight) => (
          <Icon
            key={`2-${weight}`}
            className={text('className', '')}
            style={object('style', iconStyles)}
            icon={text(`icon 2 ${weight}`, 'cocktail')}
            size={optionsKnob('size', iconSizesObj, 'lg', optionsKnobOptions)}
            fixed={boolean('fixed', true)}
            type={optionsKnob(`type 2 ${weight}`, iconTypesObj, weight, optionsKnobOptions)}
          />
        ))}
      </div>
      <div>
        <Icon
          className={text('className', '')}
          style={object('style', iconStyles)}
          icon={text('icon 3', 'coffee-togo')}
          size={optionsKnob('size', iconSizesObj, 'lg', optionsKnobOptions)}
          fixed={boolean('fixed', true)}
          type={optionsKnob('type 3', iconTypesObj, 'solid', optionsKnobOptions)}
        />
      </div>
    </H1>
  ))
