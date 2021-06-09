import React from 'react'
import PropTypes from 'prop-types'

import { lightOrDark, rgbToHex } from '../../utils'

const ColorBlock = ({ color, variable, set }) => {
  const [colorCode, setColorCode] = React.useState(color || '#404')
  const [copied, setCopied] = React.useState(false)
  const ColorBlockRef = React.useRef(null)

  React.useEffect(() => {
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
    if (colorCode) {
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
  }

  return (
    <div
      ref={ColorBlockRef}
      className={`kc-colorBlock kc-colorBlock--${variable}`}
      data-color={colorCode}
      onClick={copyColorCode}
    >
      <div
        className={`kc-color ${copied ? 'kc-color--copied' : ''}`}
        style={{
          backgroundColor: colorCode === '#404' ? null : colorCode,
          color: set === 'social' || lightOrDark(colorCode) === 'dark' ? '#fff' : '#26293C',
        }}
      >
        <span className="kc-color__variable">{variable}</span>
        <span className="kc-color__code">{copied ? 'Copied Hex Code!' : colorCode}</span>
      </div>
    </div>
  )
}

ColorBlock.propTypes = {
  color: PropTypes.string,
  variable: PropTypes.string,
}

export default ColorBlock
