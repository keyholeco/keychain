import React from 'react'
import PropTypes from 'prop-types'
import './_button.styl'

export const buttonSizes = ['small', 'medium', 'big']
export const buttonColors = [
  'default',
  'primary',
  'instagram',
  'blue',
  'green',
  'red',
  'yellow',
  'orange',
  'gray',
]

export const Button = (props) => {
  const classNames = `
    key-button
    ${props.plain ? 'key-button--plain' : ''}
    ${props.rounded ? 'key-button--rounded' : ''}
    ${props.disabled ? 'key-button--disabled' : ''}
    ${props.straight ? 'key-button--straight' : ''}
    ${props.outline ? 'key-button--outline' : ''}
    ${props.caps ? 'key-button--caps' : ''}
    ${props.size ? `key-button--${props.size}` : ''}
    ${props.color ? `key-button--${props.color}` : ''}
    ${props.className || ''}
  `

  if (props.href)
    return (
      <a
        onClick={props.onClick}
        href={props.href}
        style={props.style}
        className={classNames}
        disabled={props.disabled}
      >
        {props.children}
      </a>
    )

  return (
    <button
      onClick={props.onClick}
      style={props.style}
      className={classNames}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,

  plain: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  straight: PropTypes.bool,
  outline: PropTypes.bool,
  caps: PropTypes.bool,

  size: PropTypes.oneOf(buttonSizes),
  color: PropTypes.oneOf(buttonColors),
}

Button.defaultProps = {
  style: {},
  plain: false,
  rounded: false,
  disabled: false,
  straight: false,
  outline: false,
  caps: false,
  size: 'medium',
  color: 'default',
}

export default Button
