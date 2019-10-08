import React from 'react'
import { storiesOf } from '@storybook/react'

import colors from './colors'
import ColorBlock from './index'

storiesOf('Atoms/ColorBlock', module).add('colors', () => {
  return (
    <React.Fragment>
      {colors.map((row, index) => {
        return (
          <div key={`colorrow-${index}`} className="kc-colorBlocks">
            {row.map((color) => {
              return (
                <ColorBlock
                  key={`colorblock-${color.code || color.variable}`}
                  variable={color.variable}
                  color={color.code}
                />
              )
            })}
          </div>
        )
      })}
    </React.Fragment>
  )
})
