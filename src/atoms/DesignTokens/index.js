import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { rgbToHex } from '../../utils'

const ColorBlock = ({ name }) => {
  const [colorCode, setColorCode] = React.useState('#404')
  const [copied, setCopied] = React.useState(false)
  const ColorBlockRef = React.useRef(null)

  useEffect(() => {
    if (colorCode === '#404' && ColorBlockRef && ColorBlockRef.current) {
      const colorBlockEl = ColorBlockRef.current
      if (colorBlockEl && colorBlockEl.querySelector('.kc-color')) {
        const colorEl = colorBlockEl.querySelector('.kc-color')
        const rgb = window.getComputedStyle(colorEl).getPropertyValue('background-color')
        if (rgb) {
          const rgbArr = rgb
            .replace(/rgb\(|\)| /gi, '')
            .split(',')
            .map((x) => parseInt(x))
          const hex = rgbToHex(...rgbArr)
          if (hex) setColorCode(hex)
        }
      }
    }
  })

  const copyColorCode = () => {
    setCopied(true)

    const input = document.createElement('input')
    input.setAttribute('id', 'color_code')
    input.setAttribute('class', 'hide')
    input.setAttribute('type', 'text')
    input.setAttribute('name', 'color_code')
    input.setAttribute('value', colorCode)
    document.body.appendChild(input)

    if (input && input.select) {
      input.select()

      try {
        document.execCommand('copy')
        input.blur()
        input.parentNode.removeChild(input)

        console.log(`Copied color: ${colorCode}`)

        setTimeout(() => {
          setCopied(false)
        }, 3000)
      } catch (err) {
        console.log(`Browser doesn't support copy!`)
      }
    }
  }

  return (
    <div
      ref={ColorBlockRef}
      className={`kc-colorBlock kc-colorBlock--${name}`}
      data-color={colorCode}
      onClick={copyColorCode}
    >
      <div style={{ ...defaultStyles.colorBlock, backgroundColor: `var(--color-${name})` }} />
      <div style={defaultStyles.descBlock}>
        <p style={defaultStyles.desc}>{name}</p>
        <p style={{ ...defaultStyles.desc, ...defaultStyles.descHex }}>
          {copied ? 'Copied Hex Code!' : colorCode}
        </p>
      </div>
    </div>
  )
}

ColorBlock.propTypes = {
  name: PropTypes.string,
}

const defaultStyles = {
  descBlock: { padding: '.25em' },
  desc: { fontSize: '.85em', fontWeight: 500, margin: 0 },
  descHex: { fontWeight: 400 },
  colorBlock: { width: '125px', height: '120px' },
}

export default ColorBlock
