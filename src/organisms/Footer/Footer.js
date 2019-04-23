import React from 'react'
import PropTypes from 'prop-types'

import { lightOrDark } from '../../utils'

export const Footer = (props) => {
  const styles = { ...props.style }
  if (props.backgroundColor && props.backgroundColor !== styles.backgroundColor) {
    styles.backgroundColor = props.backgroundColor
    styles.color = lightOrDark(props.backgroundColor) === 'dark' ? '#fff' : '#26293C'
  }

  return (
    <footer className={`kc-footer ${props.className || ''}`} style={styles}>
      {props.children}
    </footer>
  )
}

Footer.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  backgroundColor: PropTypes.string,
}

Footer.defaultProps = {
  style: {},
  backgroundColor: '#FFD433',
}

export default Footer
