import React from 'react'
import PropTypes from 'prop-types'

export const iconTypes = ['solid', 'regular', 'light', 'brands', 'duotone']
export const iconSizes = ['xs', 'sm', 'lg', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']

export const mapIconTypeToClass = (type) => {
  switch (type) {
    case 'regular':
      return 'far'
    case 'light':
      return 'fal'
    case 'brands':
      return 'fab'
    case 'duotone':
      return 'fad'
    case 'solid':
    default:
      return 'fas'
  }
}

export const Icon = (props) => {
  const classNames = `
    kc-icon
    ${mapIconTypeToClass(props.type)}
    ${props.icon ? `fa-${props.icon}` : ''}
    ${props.size ? `fa-${props.size}` : ''}
    ${props.fixed ? 'fa-fw' : ''}
    ${props.className || ''}
  `

  const styles = { ...props.style }

  return <i className={classNames} style={styles} />
}

Icon.propTypes = {
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Style object that can be attached to the component.
   */
  style: PropTypes.object,
  /**
   * Solid, regular, light, and duotone apply to non-branded icons only. For all 5 of our commonly used branded icons i.e. `twitter`, `instagram`, `tiktok`, `facebook-f`, `youtube`, you must use `type="brands"`.
   *
   * E.g. for the icon `<i className="fal fa-alien-monster" />`, we would set `type="light"`.
   *
   * <a href="https://fontawesome.com/v5.15/how-to-use/on-the-web/referencing-icons/basic-use">FontAwesome icon style prefixes reference</a>.
   */
  type: PropTypes.oneOf(iconTypes),
  /**
   * The icon name from a FontAwesome icon.
   *
   * E.g. for the icon `<i className="fal fa-alien-monster" />`, we would set `icon="alien-monster"`.
   *
   * Full list of <a href="https://fontawesome.com/v5.15/icons">FontAwesome icons</a>.
   */
  icon: PropTypes.string.isRequired,
  /**
   * <a href="https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/sizing-icons">FontAwesome size guide</a>.
   */
  size: PropTypes.oneOf(iconSizes),
  /**
   * Set to true when we need to vertically align a series of icons. This will apply <a href="https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/fixed-width-icons">the `fa-fw` class</a> to the icon.
   *
   * Default: false.
   */
  fixed: PropTypes.bool,
}

Icon.defaultProps = {
  style: {},
}

export default Icon
