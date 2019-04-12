import React from 'react'
import { storiesOf } from '@storybook/react'

import Type, { H1, H2, H3, H4, weights, sizes } from './index'

const copy = 'Every great relationship starts with listening.'

storiesOf('Atoms/Type', module)
  .add('basic', () => <Type>{copy}</Type>)
  .add('bold', () => <Type bold>{copy}</Type>)
  .add('light', () => <Type light>{copy}</Type>)
  .add('italics', () => <Type italics>{copy}</Type>)
  .add('heading', () => <Type heading>{copy}</Type>)
  .add('weight', () => (
    <div>
      {weights.map((weight) => (
        <div key={`type-weight-${weight}`}>
          <Type weight={weight}>
            {weight}: {copy}
          </Type>
        </div>
      ))}
    </div>
  ))
  .add('size', () => (
    <div>
      {[...sizes].reverse().map((size) => (
        <div key={`type-size-${size}`}>
          <Type size={size}>
            {size}: {copy}
          </Type>
        </div>
      ))}
    </div>
  ))
  .add('h1', () => <H1>{copy}</H1>)
  .add('h2', () => <H2>{copy}</H2>)
  .add('h3', () => <H3>{copy}</H3>)
  .add('h4', () => <H4>{copy}</H4>)
