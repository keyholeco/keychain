import React from 'react'

import Header from './index'

export default {
  component: Header.Navigation,
  title: 'Organisms/Header/Navigation',
}

export const Navigation = () => (
  <Header backgroundColor="#26293C">
    <Header.Logo theme="dark" />
    <Header.Section>
      <Header.Navigation style={{ marginLeft: '2em' }}>
        <Header.Navigation.Link label="Brand IQ" icon="star" active={true} />
        <Header.Navigation.Link label="Advanced Suite" icon="lock" active={false} />
      </Header.Navigation>
    </Header.Section>
  </Header>
)
