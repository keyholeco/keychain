import React from 'react'

import Header from './index'
import { H2 } from '../../atoms/Type'

export default {
  component: Header.Logo,
  title: 'Organisms/Header/Logo',
}

export const Default = () => (
  <Header>
    <Header.Logo theme="default" />
  </Header>
)

export const CustomText = () => (
  <Header>
    <Header.Logo theme="custom" src="">
      <H2>Custom Text</H2>
    </Header.Logo>
  </Header>
)

export const CustomImage = () => (
  <Header>
    <Header.Logo theme="custom" src="https://cdn.keyhole.co/user_logos/37_logo.png?v=1442235000" />
  </Header>
)

export const WhiteLabelling = () => (
  <Header backgroundColor="#782C4A">
    <Header.Logo theme="custom" src="https://cdn.keyhole.co/user_logos/37_logo.png?v=1442235000">
      <H2>testing.</H2>
    </Header.Logo>
  </Header>
)
