import React from 'react'
import { storiesOf } from '@storybook/react'

import { colors, socialBranding } from './colors'
import ColorBlock from './index'

storiesOf('Atoms/ColorBlock', module).add('colors', () => {
  const colorSet = [
    { id: 'keyhole', name: 'This Is Us.', set: colors },
    { id: 'social', name: '📱 Social Branding', set: socialBranding },
  ]

  return (
    <React.Fragment>
      {colorSet.map((colorObj) => (
        <div key={`colorset-${colorObj.id}`} style={{ margin: '1em 1.5em' }}>
          <h2 style={{ margin: '1em .5em .5em' }}>{colorObj.name}</h2>
          <p style={{ margin: '.8em', color: 'var(--color-text-gray-3)' }}>
            Usage example: `
            <span style={{ fontFamily: 'monospace' }}>
              color: var(--color-{colorObj.set[0][0].variable});
            </span>
            `
          </p>
          {colorObj.set.map((row, index) => (
            <div key={`colorrow-${index}`} className="kc-colorBlocks">
              {row.map((color) => {
                return (
                  <ColorBlock
                    key={`colorblock-${color.code || color.variable}`}
                    variable={color.variable}
                    color={color.code}
                    set={colorObj.id}
                  />
                )
              })}
            </div>
          ))}
        </div>
      ))}
    </React.Fragment>
  )
})
