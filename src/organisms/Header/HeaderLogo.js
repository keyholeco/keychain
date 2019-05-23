import React from 'react'
import PropTypes from 'prop-types'

import { eventTrackPropShape, eventTrackPropToAttributes } from '../../utils'

import KeyholeLogo from '../../atoms/KeyholeLogo'

export const headerLogoThemes = ['default', 'dark', 'custom']

export const HeaderLogo = (props) => {
  if (props.theme === 'custom') {
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
          {...eventTrackPropToAttributes(props.eventTrack)}
        >
          <img src={props.src} className="kc-headerLogo__image" />
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
          {...eventTrackPropToAttributes(props.eventTrack)}
        >
          <img src={props.src} className="kc-headerLogo__image" />
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
        {...eventTrackPropToAttributes(props.eventTrack)}
      >
        {props.children || null}
      </div>
    )
  }

  return (
    <a
      href={props.href || '/?home_force=true'}
      className={`
        kc-headerLogoLink
        ${props.className || ''}
      `}
      style={props.style}
      onClick={props.onClick}
      {...eventTrackPropToAttributes(props.eventTrack)}
    >
      <KeyholeLogo
        className={`
          kc-headerLogo
          ${props.theme === 'dark' ? 'kc-headerLogo--themeDark' : ''}
        `}
        theme={props.theme === 'light' ? 'light' : props.theme === 'dark' ? 'dark' : 'default'}
      />
      {props.children || null}
    </a>
  )
}

HeaderLogo.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  theme: PropTypes.oneOf(headerLogoThemes),
  href: PropTypes.string,
  src: PropTypes.string,
  onClick: PropTypes.func,
  eventTrack: PropTypes.shape(eventTrackPropShape),
}

HeaderLogo.defaultProps = {
  style: {},
  theme: 'default',
}

export default HeaderLogo
