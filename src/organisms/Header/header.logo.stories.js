import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, color, optionsKnob } from '@storybook/addon-knobs'

import Header from './index'
import { headerLogoThemes } from './HeaderLogo'
import { H2 } from '../../atoms/Type'

const headerLogoThemesObj = headerLogoThemes.reduce((prev, curr) => {
  prev[curr] = curr
  return prev
}, {})

const optionsKnobOptions = {
  display: 'select',
}

storiesOf('Organisms/Header/Logo', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    return (
      <Header>
        <Header.Logo
          theme={optionsKnob('theme', headerLogoThemesObj, 'default', optionsKnobOptions)}
          src={text('src (only works if theme = custom)', '')}
        />
      </Header>
    )
  })
  .add('custom text', () => {
    return (
      <Header>
        <Header.Logo
          theme={optionsKnob('theme', headerLogoThemesObj, 'custom', optionsKnobOptions)}
          src={text('src', '')}
        >
          <H2>{text('text', 'Custom Text')}</H2>
        </Header.Logo>
      </Header>
    )
  })
  .add('custom image', () => {
    return (
      <Header>
        <Header.Logo
          theme={optionsKnob('theme', headerLogoThemesObj, 'custom', optionsKnobOptions)}
          src={text('src', 'https://cdn.keyhole.co/user_logos/37_logo.png?v=1442235000')}
        />
      </Header>
    )
  })
  .add('white-labelling', () => {
    return (
      <Header backgroundColor={color('header backgroundColor', '#782C4A')}>
        <Header.Logo
          theme={optionsKnob('theme', headerLogoThemesObj, 'custom', optionsKnobOptions)}
          src={text('src', 'https://cdn.keyhole.co/user_logos/37_logo.png?v=1442235000')}
        >
          <H2>{text('text', 'testing.')}</H2>
        </Header.Logo>
      </Header>
    )
  })
