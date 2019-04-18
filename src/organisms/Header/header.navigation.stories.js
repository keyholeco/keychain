import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Header from './index'

storiesOf('Organisms/Header.Navigation', module).add('basic', () => {
  return (
    <Header backgroundColor="#26293C">
      <Header.Logo theme="dark" />
      <Header.Section>
        <Header.Navigation style={{ marginLeft: '2em' }}>
          <Header.Navigation.Link
            onClick={action('navigation-link-click')}
            label="Brand IQ"
            icon="star"
            active
          />
          <Header.Navigation.Link
            onClick={action('navigation-link-click')}
            label="Advanced Suite"
            icon="lock"
          />
        </Header.Navigation>
      </Header.Section>
    </Header>
  )
})
