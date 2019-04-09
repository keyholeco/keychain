import React from 'react'
import PropTypes from 'prop-types'

const ColorBlock = (props) => {
  const [copied, setCopied] = React.useState(false)

  const copyColorCode = (e) => {
    setCopied(true)

    const colorCode = e.target.nextElementSibling.nextElementSibling.innerText
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
    <div className={`key-colorBlock key-colorBlock--${props.variable}`} onClick={copyColorCode}>
      <div
        className={`key-color ${copied ? 'key-color--copied' : ''}`}
        style={{ backgroundColor: props.color }}
      >
        {copied ? <span className="key-color__copiedMessage">Copied!</span> : null}
      </div>
      <label className="variable">${props.variable}</label>
      <label className="code">{props.color}</label>
    </div>
  )
}

ColorBlock.propTypes = {
  color: PropTypes.string,
  variable: PropTypes.string,
}

export default ColorBlock
