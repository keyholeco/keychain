import React from 'react'
import { colors, socialBranding } from './colors'
import ColorBlock from './index'
import ColorBlockDocs from './colorBlock.docs.mdx'

export default {
  component: ColorBlock,
  title: 'Design Tokens/Colors',
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

export const Colors = () =>
  colorSet.map((setObj) => (
    <div key={`colorset-${setObj.id}`}>
      <h2 style={{ margin: '1em 0 .5em' }}>{setObj.name}</h2>

      {setObj.set.map((row, index) => (
        <div key={`colorrow-${index}`} style={defaultStyles.blocks}>
          {row.map((color) => (
            <ColorBlock key={`colorblock-${color}`} name={color} />
          ))}
        </div>
      ))}
    </div>
  ))

const defaultStyles = {
  blocks: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
}
