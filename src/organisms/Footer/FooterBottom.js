import React from 'react'
import PropTypes from 'prop-types'
import './footerBottom.styl'

export const FooterBottom = (props) => {
  return (
    <div
      className={`
        kc-footerBottom
        ${props.className || ''}
      `}
      style={props.style}
    >
      {props.children || null}
    </div>
  )
}

FooterBottom.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

FooterBottom.defaultProps = {
  style: {},
}

export default FooterBottom
