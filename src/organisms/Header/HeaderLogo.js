import React from 'react'
import PropTypes from 'prop-types'

import KeyholeLogo from './KeyholeLogo'
import './_headerLogo.styl'

export const HeaderLogo = (props) => {
  if (props.type === 'custom') {
    if (props.href && props.src) {
      return (
        <a
          href={props.href}
          className={`
            kc-headerLogoLink
            ${props.className || ''}
          `}
          style={props.style}
          onClick={props.onClick}
        >
          <img src={props.src} className="kc-headerLogo" />
          {props.children || null}
        </a>
      )
    }

    if (props.src) {
      return (
        <div
          className={`
            kc-headerLogo
            ${props.className || ''}
          `}
          style={props.style}
          onClick={props.onClick}
        >
          <img src={props.src} className="kc-headerLogo" />
          {props.children || null}
        </div>
      )
    }

    return (
      <div
        className={`
          kc-headerLogo
          ${props.className || ''}
        `}
        style={props.style}
        onClick={props.onClick}
      >
        {props.children || null}
      </div>
    )
  }

  if (props.type !== 'custom' && !props.style.width) props.style.width = '150px'
  return (
    <a
      href={props.href || '/?home_force=true'}
      className={`
        kc-headerLogoLink
        ${props.className || ''}
      `}
      style={props.style}
      onClick={props.onClick}
    >
      <KeyholeLogo className="kc-headerLogo" />
      {props.children || null}
    </a>
  )
}

HeaderLogo.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  type: PropTypes.oneOf(['keyhole', 'custom']),
  href: PropTypes.string,
  src: PropTypes.string,
  onClick: PropTypes.func,
}

HeaderLogo.defaultProps = {
  style: {},
  type: 'keyhole',
}

export default HeaderLogo
