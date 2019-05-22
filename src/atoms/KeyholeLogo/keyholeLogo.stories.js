import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object, optionsKnob } from '@storybook/addon-knobs'

import KeyholeLogo, { logoThemes } from './index'

const defaultStyles = { display: 'inline-block', padding: '1.5em' }

const logoThemesObj = logoThemes.reduce((prev, curr) => {
  prev[curr] = curr
  return prev
}, {})

const optionsKnobOptions = {
  display: 'select',
}

storiesOf('Atoms/KeyholeLogo', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div style={{ ...defaultStyles, backgroundColor: '#FFD433' }}>
      <KeyholeLogo
        className={text('className', '')}
        style={object('style', {})}
        theme={optionsKnob('type', logoThemesObj, 'default', optionsKnobOptions)}
      />
    </div>
  ))
  .add('light', () => (
    <div style={{ ...defaultStyles, backgroundColor: '#fff' }}>
      <KeyholeLogo
        className={text('className', '')}
        style={object('style', {})}
        theme={optionsKnob('type', logoThemesObj, 'light', optionsKnobOptions)}
      />
    </div>
  ))
  .add('dark', () => (
    <div style={{ ...defaultStyles, backgroundColor: '#26293C' }}>
      <KeyholeLogo
        className={text('className', '')}
        style={object('style', {})}
        theme={optionsKnob('type', logoThemesObj, 'dark', optionsKnobOptions)}
      />
    </div>
  ))
