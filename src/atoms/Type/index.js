import React from 'react'
import PropTypes from 'prop-types'
import { duplicateNumbersAsStrings } from '../../utils'

export const weights = duplicateNumbersAsStrings([300, 400, 500, 700, 900])
export const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']

export const Type = (props) => {
  const classNames = `
    kc-type
    ${props.bold ? 'kc-type--bold' : ''}
    ${props.light ? 'kc-type--light' : ''}
    ${props.italics ? 'kc-type--italics' : ''}
    ${props.heading ? 'kc-type--heading' : ''}
    ${props.caps ? 'kc-type--caps' : ''}
    ${props.weight ? `kc-type--${props.weight.toString()}` : ''}
    ${props.size ? `kc-type--${props.size}` : ''}
    ${props.className || ''}
  `

  const styles = { ...props.style }
  if (props.weight) {
    styles.fontWeight = parseInt(props.weight)
  }

  switch (props.size) {
    case 'xxxl':
    case 'xxl':
      return (
        <h1 className={classNames} style={styles}>
          {props.children}
        </h1>
      )
    case 'xl':
      return (
        <h2 className={classNames} style={styles}>
          {props.children}
        </h2>
      )
    case 'lg':
      return (
        <h3 className={classNames} style={styles}>
          {props.children}
        </h3>
      )
    case 'md':
      return (
        <h4 className={classNames} style={styles}>
          {props.children}
        </h4>
      )
    default:
      break
  }

  return (
    <span className={classNames} style={styles}>
      {props.children}
    </span>
  )
}

Type.propTypes = {
  /**
   * The copy that actually goes into the h1/h2/h3/h4/span.
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Style object that can be attached to the component.
   */
  style: PropTypes.object,
  bold: PropTypes.bool,
  light: PropTypes.bool,
  italics: PropTypes.bool,
  heading: PropTypes.bool,
  caps: PropTypes.bool,
  weight: PropTypes.oneOf(weights),
  size: PropTypes.oneOf(sizes),
}

Type.defaultProps = {
  style: {},
}

export const H1 = (...args) => Type(...args)
H1.propTypes = { ...Type.propTypes }
H1.defaultProps = { ...Type.defaultProps, ...{ size: 'xxl' } }

export const H2 = (...args) => Type(...args)
H2.propTypes = { ...Type.propTypes }
H2.defaultProps = { ...Type.defaultProps, ...{ size: 'xl' } }

export const H3 = (...args) => Type(...args)
H3.propTypes = { ...Type.propTypes }
H3.defaultProps = { ...Type.defaultProps, ...{ size: 'lg' } }

export const H4 = (...args) => Type(...args)
H4.propTypes = { ...Type.propTypes }
H4.defaultProps = { ...Type.defaultProps, ...{ size: 'md' } }

export default Type
