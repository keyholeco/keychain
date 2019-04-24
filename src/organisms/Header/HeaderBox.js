import React from 'react'
import PropTypes from 'prop-types'

import { eventTrackPropShape, eventTrackPropToAttributes } from '../../utils'

import Icon from '../../atoms/Icon'
import Type from '../../atoms/Type'

const HeaderBox = (props) => {
  const styles = { ...props.style }
  if (!props.children) styles.pointerEvents = 'none'

  return (
    <div
      className={`
        kc-headerBox
        ${props.open ? 'kc-headerBox--open' : ''}
        ${props.className || ''}
      `}
      style={styles}
      onClick={props.onClick}
      {...eventTrackPropToAttributes(props.eventTrack)}
    >
      <Type className="kc-headerBox__label" weight={400}>
        {props.label}
      </Type>
      {props.children ? <Icon icon="caret-down" /> : null}
      {props.children ? React.cloneElement(props.children, { open: props.open }) : null}
    </div>
  )
}

HeaderBox.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  open: PropTypes.bool,
  eventTrack: PropTypes.shape(eventTrackPropShape),
}

HeaderBox.defaultProps = {
  style: {},
}

const HeaderBoxDropdown = (props) => (
  <div
    className={`
    kc-headerBoxDropdown
    ${props.open ? 'kc-headerBoxDropdown--open' : ''}
    ${props.className || ''}
  `}
    style={props.style}
  >
    {props.children || null}
  </div>
)

HeaderBoxDropdown.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  open: PropTypes.bool.isRequired,
}

HeaderBoxDropdown.defaultProps = {
  style: {},
  open: false,
}

const HeaderBoxDropdownLink = (props) => (
  <a
    className={`
      kc-headerBoxDropdown__link
      ${props.active ? 'kc-headerBoxDropdown__link--active' : ''}
      ${props.className || ''}
    `}
    href={props.href}
    onClick={props.onClick}
    style={props.style}
    {...eventTrackPropToAttributes(props.eventTrack)}
  >
    <Type className="kc-headerBoxDropdown__label" weight={400}>
      {props.label}
    </Type>
  </a>
)

HeaderBoxDropdownLink.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  eventTrack: PropTypes.shape(eventTrackPropShape),
}

HeaderBoxDropdownLink.defaultProps = {
  style: {},
}

HeaderBoxDropdown.Link = HeaderBoxDropdownLink
HeaderBox.Dropdown = HeaderBoxDropdown

export { HeaderBox }
export { HeaderBoxDropdown }
export { HeaderBoxDropdownLink }
export default HeaderBox
