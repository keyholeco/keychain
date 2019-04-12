import React from 'react'
import PropTypes from 'prop-types'

export const HeaderSection = (props) => {
  const styles = { ...props.style }
  if (props.align) {
    styles.textAlign = props.align
    switch (props.align) {
      case 'left':
        styles.marginRight = 'auto'
        break
      case 'center':
        styles.marginLeft = 'auto'
        styles.marginRight = 'auto'
        break
      case 'right':
        styles.marginLeft = 'auto'
        break
      default:
        break
    }
  }
  if (props.verticalAlign) {
    switch (props.verticalAlign) {
      case 'top':
        styles.alignSelf = 'flex-start'
        break
      case 'middle':
        styles.alignSelf = 'center'
        break
      case 'bottom':
        styles.alignSelf = 'flex-end'
        break
      default:
        break
    }
  }
  return (
    <div
      className={`
        kc-headerSection
        ${props.className || ''}
      `}
      style={styles}
    >
      {props.children || null}
    </div>
  )
}

HeaderSection.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  verticalAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
}

HeaderSection.defaultProps = {
  style: {},
}

export default HeaderSection
