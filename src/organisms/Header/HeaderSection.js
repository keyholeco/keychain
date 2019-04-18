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
      case 'stretch':
        styles.height = '100%'
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
  /**
   * The align property is more of a "push" rather than a horizontal align.
   * Using align="right" will push all content before it to the left
   * leaving the section placed at the right.
   * Having two consecutive elements with align="right" will result in
   * the latter being placed at the right while the former pushed to the left.
   * The solution to the problem above is to only have align="right" on the former.
   */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  verticalAlign: PropTypes.oneOf(['top', 'middle', 'bottom', 'stretch']),
}

HeaderSection.defaultProps = {
  style: {},
  verticalAlign: 'stretch',
}

export default HeaderSection
