import React from 'react'

import Header from './index'

export default {
  component: Header.Box,
  title: 'Organisms/Header/Box',
}

export const Default = () => (
  <Header backgroundColor="#26293C">
    <Header.Logo theme="dark" />
    <Header.Section align="right" verticalAlign="middle">
      <Header.Box label="info@keyhole.co">
        <Header.Box.Dropdown>
          <Header.Box.Dropdown.Link label="Settings" />
          <Header.Box.Dropdown.Link label="Administrator" />
          <Header.Box.Dropdown.Link label="Logout" />
        </Header.Box.Dropdown>
      </Header.Box>
    </Header.Section>
  </Header>
)

export const DropdownOpen = () => (
  <Header backgroundColor="#26293C">
    <Header.Logo theme="dark" />
    <Header.Section align="right" verticalAlign="middle">
      <Header.Box label="info@keyhole.co" open={true}>
        <Header.Box.Dropdown>
          <Header.Box.Dropdown.Link label="Settings" />
          <Header.Box.Dropdown.Link label="Administrator" />
          <Header.Box.Dropdown.Link label="Logout" />
        </Header.Box.Dropdown>
      </Header.Box>
    </Header.Section>
  </Header>
)
