import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Header from './index'
import { Icon, Type, Button } from '../../../dist'

storiesOf('Organisms/Header', module)
  .add('basic', () => {
    return (
      <Header>
        <Header.Logo />
      </Header>
    )
  })
  .add('backgroundColor', () => {
    return (
      <Header backgroundColor="#26293C">
        <Header.Logo theme="dark" />
      </Header>
    )
  })
  .add('advanced', () => {
    return (
      <Header backgroundColor="#26293C">
        <Header.Logo theme="dark" />

        <Header.Section align="left" style={{ marginLeft: '3em' }}>
          <Header.Navigation>
            <Header.Navigation.Link
              label="Brand IQ"
              icon="star"
              active={true}
              onClick={action('navigation-link-click')}
            />
            <Header.Navigation.Link
              label="Advanced Suite"
              icon="lock"
              onClick={action('navigation-link-click')}
            />
          </Header.Navigation>
        </Header.Section>

        <Header.Section
          align="right"
          verticalAlign="middle"
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

        <Header.Section>
          <Header.Box label="info@keyhole.co" open={false}>
            <Header.Box.Dropdown>
              <Header.Box.Dropdown.Link label="Settings" />
              <Header.Box.Dropdown.Link label="Administrator" />
              <Header.Box.Dropdown.Link label="Logout" />
            </Header.Box.Dropdown>
          </Header.Box>
        </Header.Section>
      </Header>
    )
  })
