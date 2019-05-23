import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object, optionsKnob, boolean } from '@storybook/addon-knobs'

import Type, { H1, H2, H3, H4, weights, sizes } from './index'

const copy = 'Every great relationship starts with listening.'

const weightsObj = weights.reduce((prev, curr) => {
  prev[curr.toString()] = curr
  return prev
}, {})

const sizesObj = sizes.reduce((prev, curr) => {
  prev[curr] = curr
  return prev
}, {})

const optionsKnobOptions = {
  display: 'select',
}

storiesOf('Atoms/Type', module)
  .addDecorator(withKnobs)
  .add('basic', () => (
    <Type
      className={text('className', '')}
      style={object('style', {})}
      bold={boolean('bold', false)}
      light={boolean('light', false)}
      italics={boolean('italics', false)}
      heading={boolean('heading', false)}
      caps={boolean('caps', false)}
      weight={optionsKnob(`weight`, weightsObj, '500', optionsKnobOptions)}
      size={optionsKnob(`size`, sizesObj, 'sm', optionsKnobOptions)}
    >
      {text('copy', copy)}
    </Type>
  ))
  .add('bold', () => <Type bold={boolean('bold', true)}>{text('copy', copy)}</Type>)
  .add('light', () => <Type light={boolean('light', true)}>{text('copy', copy)}</Type>)
  .add('italics', () => <Type italics={boolean('italics', true)}>{text('copy', copy)}</Type>)
  .add('heading', () => <Type heading={boolean('heading', true)}>{text('copy', copy)}</Type>)
  .add('caps', () => <Type caps={boolean('caps', true)}>{text('copy', copy)}</Type>)
  .add('weight', () => (
    <div>
      {weights.map((weight) => (
        <div key={`type-weight-${weight}`}>
          <Type weight={optionsKnob(`weight ${weight}`, weightsObj, weight, optionsKnobOptions)}>
            {weight}: {text('copy', copy)}
          </Type>
        </div>
      ))}
    </div>
  ))
  .add('size', () => (
    <div>
      {[...sizes].reverse().map((size) => (
        <div key={`type-size-${size}`}>
          <Type size={optionsKnob(`size ${size}`, sizesObj, size, optionsKnobOptions)}>
            {size}: {text('copy', copy)}
          </Type>
        </div>
      ))}
    </div>
  ))
  .add('h1', () => <H1>{text('copy', copy)}</H1>)
  .add('h2', () => <H2>{text('copy', copy)}</H2>)
  .add('h3', () => <H3>{text('copy', copy)}</H3>)
  .add('h4', () => <H4>{text('copy', copy)}</H4>)
