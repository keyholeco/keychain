import React from 'react'
import PropTypes from 'prop-types'
import './button.styl'

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
  'white',
]

export const Button = (props) => {
  const classNames = `
    kc-button
    ${props.plain ? 'kc-button--plain' : ''}
    ${props.rounded ? 'kc-button--rounded' : ''}
    ${props.disabled ? 'kc-button--disabled' : ''}
    ${props.straight ? 'kc-button--straight' : ''}
    ${props.outline ? 'kc-button--outline' : ''}
    ${props.caps ? 'kc-button--caps' : ''}
    ${props.size ? `kc-button--${props.size}` : ''}
    ${props.color ? `kc-button--${props.color}` : ''}
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
