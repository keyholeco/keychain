import React from 'react'

import Header from './index'
import { Type } from '../../atoms/Type'

const sectionStyles = { backgroundColor: 'rgba(0,0,0,0.2)', padding: '0.25em' }

export default {
  component: Header.Section,
  title: 'Organisms/Header/Section',
}

export const Default = () => (
  <Header>
    <Header.Logo />
    <Header.Section style={sectionStyles} align="left" verticalAlign="stretch">
      <Type>Here is another section on the header</Type>
    </Header.Section>
  </Header>
)

export const Alignment = () => (
  <Header>
    <Header.Logo />
    <Header.Section style={sectionStyles} align="right" verticalAlign="bottom">
      <Type>Here is another section on the header</Type>
    </Header.Section>
  </Header>
)

export const MultipleSections = () => (
  <Header>
    <Header.Logo />
    <Header.Section style={sectionStyles} align="left" verticalAlign="top">
      <Type>Left + Top Aligned</Type>
    </Header.Section>

    <Header.Section style={sectionStyles} align="center" verticalAlign="middle">
      <Type>Center + Middle Aligned</Type>
    </Header.Section>

    <Header.Section style={sectionStyles} align="right" verticalAlign="bottom">
      <Type>Right + Bottom Aligned</Type>
    </Header.Section>
  </Header>
)
