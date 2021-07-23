import React from 'react'

import Header from './index'
import { Icon } from '../../atoms/Icon'
import { Type } from '../../atoms/Type'
import { Button } from '../../molecules/Button'

export default {
  component: Header,
  title: 'Organisms/Header',
}

export const Default = () => (
  <Header backgroundColor="#FFD433">
    <Header.Logo theme="default" />
  </Header>
)

export const BackgroundColor = () => (
  <Header backgroundColor="#26293C">
    <Header.Logo theme="dark" />
  </Header>
)

export const Advanced = () => (
  <Header backgroundColor="#26293C">
    <Header.Logo theme="dark" />

    <Header.Section
      align="left"
      className="kc-headerNavigation__wrapper"
      style={{ marginLeft: window.matchMedia('(max-width: 800px)').matches ? null : '3em' }}
    >
      <Header.Navigation>
        <Header.Navigation.Link label="Brand IQ" icon="star" active={true} />
        <Header.Navigation.Link label="Advanced Suite" icon="lock" active={false} />
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
      <Button color="orange" style={{ width: '110px', whiteSpace: 'nowrap' }} caps>
        <Icon icon="bolt" style={{ marginRight: '0.5em', fontSize: '0.9em' }} />
        <Type bold>Upgrade</Type>
      </Button>
    </Header.Section>

    <Header.Section className="kc-headerBox__wrapper" verticalAlign="middle">
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
