import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import Header from './index'

const headerStyles = { marginTop: '3em' } // to avoid touching show info button

storiesOf('Organisms/Header/Box', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    return (
      <Header backgroundColor="#26293C" style={headerStyles}>
        <Header.Logo theme="dark" />
        <Header.Section align="right" verticalAlign="middle">
          <Header.Box label={text('label', 'info@keyhole.co')} open={boolean('open', false)}>
            <Header.Box.Dropdown>
              <Header.Box.Dropdown.Link
                label={text('dropdown link label #1', 'Settings')}
                onClick={action('header-box-dropdown-link-click')}
              />
              <Header.Box.Dropdown.Link
                label={text('dropdown link label #2', 'Administrator')}
                onClick={action('header-box-dropdown-link-click')}
              />
              <Header.Box.Dropdown.Link
                label={text('dropdown link label #3', 'Logout')}
                onClick={action('header-box-dropdown-link-click')}
              />
            </Header.Box.Dropdown>
          </Header.Box>
        </Header.Section>
      </Header>
    )
  })
  .add('dropdown', () => {
    return (
      <Header backgroundColor="#26293C" style={headerStyles}>
        <Header.Logo theme="dark" />
        <Header.Section align="right" verticalAlign="middle">
          <Header.Box label={text('label', 'info@keyhole.co')} open={boolean('open', true)}>
            <Header.Box.Dropdown>
              <Header.Box.Dropdown.Link
                label={text('dropdown link label #1', 'Settings')}
                onClick={action('header-box-dropdown-link-click')}
              />
              <Header.Box.Dropdown.Link
                label={text('dropdown link label #2', 'Administrator')}
                onClick={action('header-box-dropdown-link-click')}
              />
              <Header.Box.Dropdown.Link
                label={text('dropdown link label #3', 'Logout')}
                onClick={action('header-box-dropdown-link-click')}
              />
            </Header.Box.Dropdown>
          </Header.Box>
        </Header.Section>
      </Header>
    )
  })
