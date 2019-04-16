import React from 'react'
import PropTypes from 'prop-types'
import './headerNavigation.styl'

import { eventTrackPropShape, eventTrackPropToAttributes } from '../../utils'

import Icon, { iconTypes, iconSizes } from '../../atoms/Icon'
import Type from '../../atoms/Type'

const HeaderNavigation = (props) => (
  <div className={`kc-headerNavigation ${props.className || ''}`} style={props.style}>
    {props.children || null}
  </div>
)

HeaderNavigation.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

HeaderNavigation.defaultProps = {
  style: {},
}

const HeaderNavigationLink = (props) => (
  <a
    className={`
      kc-headerNavigation__link
      ${props.active ? 'kc-headerNavigation__link--active' : ''}
      ${props.className || ''}
    `}
    href={props.href}
    onClick={props.onClick}
    style={props.style}
    {...eventTrackPropToAttributes(props.eventTrack)}
  >
    <Icon className="kc-headerNavigation__icon" icon={props.icon} />
    <Type className="kc-headerNavigation__label" caps>
      {props.label}
    </Type>
  </a>
)

HeaderNavigationLink.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  active: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  icon: PropTypes.string,
  iconType: PropTypes.oneOf(iconTypes),
  iconSize: PropTypes.oneOf(iconSizes),
  iconFixed: PropTypes.bool,
  eventTrack: PropTypes.shape(eventTrackPropShape),
}

HeaderNavigationLink.defaultProps = {
  style: {},
}

HeaderNavigation.Link = HeaderNavigationLink

export { HeaderNavigation }
export { HeaderNavigationLink }
export default HeaderNavigation
