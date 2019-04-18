import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Header from './index'

const headerStyles = { marginTop: '3em' } // to avoid touching show info button

storiesOf('Organisms/Header.Box', module)
  .add('basic', () => {
    return (
      <Header backgroundColor="#26293C" style={headerStyles}>
        <Header.Logo theme="dark" />
        <Header.Section align="right" verticalAlign="middle">
          <Header.Box label="info@keyhole.co" />
        </Header.Section>
      </Header>
    )
  })
  .add('dropdown', () => {
    return (
      <Header backgroundColor="#26293C" style={headerStyles}>
        <Header.Logo theme="dark" />
        <Header.Section align="right" verticalAlign="middle">
          <Header.Box label="info@keyhole.co" open={true}>
            <Header.Box.Dropdown>
              <Header.Box.Dropdown.Link
                label="Settings"
                onClick={action('header-box-dropdown-link-click')}
              />
              <Header.Box.Dropdown.Link
                label="Administrator"
                onClick={action('header-box-dropdown-link-click')}
              />
              <Header.Box.Dropdown.Link
                label="Logout"
                onClick={action('header-box-dropdown-link-click')}
              />
            </Header.Box.Dropdown>
          </Header.Box>
        </Header.Section>
      </Header>
    )
  })
