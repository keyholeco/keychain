import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { rgbToHex } from '../../utils'

const ColorBlock = ({ name }) => {
  const [colorCode, setColorCode] = React.useState('')
  const ColorBlockRef = React.useRef(null)

  useEffect(() => {
    const rgb = window.getComputedStyle(ColorBlockRef.current)?.getPropertyValue('background-color')
    const rgbArr = rgb
      ?.replace(/rgb\(|\)| /gi, '')
      ?.split(',')
      ?.map((x) => parseInt(x))
    setColorCode(rgbToHex(...rgbArr) || '')
  }, [])

  return (
    <div style={defaultStyles.wrapper} data-color={colorCode}>
      <div
        ref={ColorBlockRef}
        style={{ ...defaultStyles.colorBlock, backgroundColor: `var(--color-${name})` }}
      />
      <div style={defaultStyles.descBlock}>
        <p style={defaultStyles.desc}>{name}</p>
        <p style={{ ...defaultStyles.desc, ...defaultStyles.descHex }}>{colorCode}</p>
      </div>
    </div>
  )
}

ColorBlock.propTypes = {
  name: PropTypes.string,
}

const defaultStyles = {
  wrapper: {
    display: 'block',
    border: '1px solid var(--color-gray)',
    marginTop: '1em',
    marginRight: '.5em',
  },
  descBlock: { padding: '.25em' },
  desc: { fontSize: '.85em', fontWeight: 500, margin: 0 },
  descHex: { fontWeight: 400 },
  colorBlock: { width: '125px', height: '120px' },
}

export default ColorBlock
