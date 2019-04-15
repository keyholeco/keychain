import React from 'react'
import PropTypes from 'prop-types'

export const iconTypes = ['solid', 'regular', 'light', 'brands']
export const iconSizes = ['xs', 'sm', 'lg', '2x', '3x', '5x', '7x', '10x']

export const mapIconTypeToClass = (type) => {
  switch (type) {
    case 'solid':
      return 'fas'
    case 'regular':
      return 'far'
    case 'light':
      return 'fal'
    case 'brands':
      return 'fab'
    default:
      return 'fas'
  }
}

export const Icon = (props) => {
  const classNames = `
    kc-icon
    ${props.type ? mapIconTypeToClass(props.type) : 'fas'}
    ${props.icon ? `fa-${props.icon}` : ''}
    ${props.size ? `fa-${props.size}` : ''}
    ${props.fixed ? 'fa-fw' : ''}
    ${props.className || ''}
  `

  const styles = { ...props.style }

  return <i className={classNames} style={styles} />
}

Icon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(iconTypes),
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(iconSizes),
  fixed: PropTypes.bool,
}

Icon.defaultProps = {
  style: {},
}

export default Icon
