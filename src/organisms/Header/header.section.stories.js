import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from './index'
import { Type } from '../../../dist'

const sectionStyles = { backgroundColor: 'rgba(0,0,0,0.2)', padding: '0.25em' }

storiesOf('Organisms/Header.Section', module)
  .add('basic', () => {
    return (
      <Header>
        <Header.Logo />
        <Header.Section style={sectionStyles}>
          <Type>Here is another section on the header</Type>
        </Header.Section>
      </Header>
    )
  })
  .add('horizontal alignment', () => {
    return (
      <Header>
        <Header.Logo />
        <Header.Section align="right" style={sectionStyles}>
          <Type>Here is another section on the header</Type>
        </Header.Section>
      </Header>
    )
  })
  .add('vertical alignment', () => {
    return (
      <Header>
        <Header.Logo />
        <Header.Section align="center" verticalAlign="stretch" style={sectionStyles}>
          <Type>stretch</Type>
        </Header.Section>
        <Header.Section align="center" verticalAlign="top" style={sectionStyles}>
          <Type>top</Type>
        </Header.Section>
        <Header.Section align="center" verticalAlign="middle" style={sectionStyles}>
          <Type>middle</Type>
        </Header.Section>
        <Header.Section align="center" verticalAlign="bottom" style={sectionStyles}>
          <Type>bottom</Type>
        </Header.Section>
      </Header>
    )
  })
  .add('multiple sections', () => {
    return (
      <Header>
        <Header.Logo />
        <Header.Section align="left" verticalAlign="top" style={sectionStyles}>
          <Type>Left + Top Aligned</Type>
        </Header.Section>
        <Header.Section align="center" verticalAlign="middle" style={sectionStyles}>
          <Type>Center + Middle Aligned</Type>
        </Header.Section>
        <Header.Section align="right" verticalAlign="bottom" style={sectionStyles}>
          <Type>Right + Bottom Aligned</Type>
        </Header.Section>
      </Header>
    )
  })
