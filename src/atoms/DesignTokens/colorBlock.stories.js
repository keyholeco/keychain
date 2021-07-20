import React from 'react'
import { colors, socialBranding } from './colors'
import ColorBlock from './index'
import ColorBlockDocs from './colorBlock.docs.mdx'

export default {
  component: ColorBlock,
  title: 'Atoms/Design Tokens',
  parameters: {
    docs: {
      page: ColorBlockDocs,
    },
  },
}

const colorSet = [
  { id: 'keyhole', name: 'This Is Us.', set: colors },
  { id: 'social', name: '📱 Social Branding', set: socialBranding },
]

export const DesignTokens = () =>
  colorSet.map((setObj) => (
    <div key={`colorset-${setObj.id}`}>
      <h2 style={{ margin: '1em 0 .5em' }}>{setObj.name}</h2>
      {setObj.set.map((row, index) => (
        <div key={`colorrow-${index}`} className="kc-colorBlocks">
          {row.map((color) => {
            return <ColorBlock key={`colorblock-${color}`} name={color} />
          })}
        </div>
      ))}
    </div>
  ))
