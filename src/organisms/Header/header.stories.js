import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, color, optionsKnob } from '@storybook/addon-knobs'

import Header from './index'
import { headerLogoThemes } from './HeaderLogo'
import { Icon, Type, Button } from '../../../dist'

const headerLogoThemesObj = headerLogoThemes.reduce((prev, curr) => {
  prev[curr] = curr
  return prev
}, {})

const optionsKnobOptions = {
  display: 'select',
}

storiesOf('Organisms/Header', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    return (
      <Header backgroundColor={color('backgroundColor', '#FFD433')}>
        <Header.Logo
          theme={optionsKnob('logo theme', headerLogoThemesObj, 'default', optionsKnobOptions)}
        />
      </Header>
    )
  })
  .add('backgroundColor', () => {
    return (
      <Header backgroundColor={color('backgroundColor', '#26293C')}>
        <Header.Logo
          theme={optionsKnob('logo theme', headerLogoThemesObj, 'dark', optionsKnobOptions)}
        />
      </Header>
    )
  })
  .add('advanced', () => {
    return (
      <Header backgroundColor={color('backgroundColor', '#26293C')}>
        <Header.Logo
          theme={optionsKnob('logo theme', headerLogoThemesObj, 'dark', optionsKnobOptions)}
        />

        <Header.Section
          align="left"
          className="kc-headerNavigation__wrapper"
          style={{ marginLeft: window.matchMedia('(max-width: 800px)').matches ? null : '3em' }}
        >
          <Header.Navigation>
            <Header.Navigation.Link
              onClick={action('navigation-link-click')}
              label={text('nav link 1 - label', 'Brand IQ')}
              icon={text('nav link 1 - icon', 'star')}
              active={boolean('nav link 1 - active', true)}
            />
            <Header.Navigation.Link
              onClick={action('navigation-link-click')}
              label={text('nav link 2 - label', 'Advanced Suite')}
              icon={text('nav link 2 - icon', 'lock')}
              active={boolean('nav link 2 - active', false)}
            />
          </Header.Navigation>
        </Header.Section>

        <Header.Section
          align="right"
          verticalAlign="middle"
          className="kc-headerButtons__wrapper"
          style={{
            fontSize: '0.8em',
            marginRight: '1rem',
          }}
        >
          <Button
            onClick={action('button-click')}
            color="orange"
            style={{ width: '110px', whiteSpace: 'nowrap' }}
            caps
          >
            <Icon icon="bolt" style={{ marginRight: '0.5em', fontSize: '0.9em' }} />
            <Type bold>Upgrade</Type>
          </Button>
        </Header.Section>

        <Header.Section className="kc-headerBox__wrapper" verticalAlign="middle">
          <Header.Box
            label={text('box label', 'info@keyhole.co')}
            open={boolean('box open', false)}
          >
            <Header.Box.Dropdown>
              <Header.Box.Dropdown.Link
                label={text('box dropdown link label #1', 'Settings')}
                onClick={action('header-box-dropdown-link-click')}
              />
              <Header.Box.Dropdown.Link
                label={text('box dropdown link label #2', 'Administrator')}
                onClick={action('header-box-dropdown-link-click')}
              />
              <Header.Box.Dropdown.Link
                label={text('box dropdown link label #3', 'Logout')}
                onClick={action('header-box-dropdown-link-click')}
              />
            </Header.Box.Dropdown>
          </Header.Box>
        </Header.Section>
      </Header>
    )
  })
