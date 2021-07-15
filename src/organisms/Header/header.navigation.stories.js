import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import Header from './index'

storiesOf('Organisms/Header/Navigation', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    return (
      <Header backgroundColor="#26293C">
        <Header.Logo theme="dark" />
        <Header.Section>
          <Header.Navigation style={{ marginLeft: '2em' }}>
            <Header.Navigation.Link
              onClick={action('navigation-link-click')}
              label={text('link 1 - label', 'Brand IQ')}
              icon={text('link 1 - icon', 'star')}
              active={boolean('link 1 - active', true)}
            />
            <Header.Navigation.Link
              onClick={action('navigation-link-click')}
              label={text('link 2 - label', 'Advanced Suite')}
              icon={text('link 2 - icon', 'lock')}
              active={boolean('link 2 - active', false)}
            />
          </Header.Navigation>
        </Header.Section>
      </Header>
    )
  })
