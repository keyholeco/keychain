import React from 'react'
import PropTypes from 'prop-types'
import './colorBlock.styl'

import { lightOrDark } from '../../utils'

const ColorBlock = (props) => {
  const [copied, setCopied] = React.useState(false)

  const copyColorCode = (e) => {
    const colorCode = e.target.closest('.kc-colorBlock').dataset.color

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
      className={`kc-colorBlock kc-colorBlock--${props.variable}`}
      data-color={props.color}
      onClick={copyColorCode}
    >
      <div
        className={`kc-color ${copied ? 'kc-color--copied' : ''}`}
        style={{
          backgroundColor: props.color,
          color: lightOrDark(props.color) === 'dark' ? '#fff' : '#26293C',
        }}
      >
        <span className="kc-color__variable">${props.variable}</span>
        <span className="kc-color__code">{copied ? 'Copied Hex Code!' : props.color}</span>
      </div>
    </div>
  )
}

ColorBlock.propTypes = {
  color: PropTypes.string,
  variable: PropTypes.string,
}

export default ColorBlock
