import React from 'react'
import PropTypes from 'prop-types'
import './_header.styl'

import { getDocumentHeight, getScrollPosition } from '../../utils'

export const Header = (props) => {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    setScrolled(false)
  }, [props.page, props.hash])

  React.useEffect(() => {
    document.addEventListener('scroll', headerScroll)
    return () => {
      document.removeEventListener('scroll', headerScroll)
    }
  })

  const headerScroll = () => {
    const pageHeight = getDocumentHeight()
    let currentSpot = getScrollPosition()
    if (currentSpot > pageHeight) currentSpot = 0
    setScrolled(currentSpot > props.scrollOffset)
  }

  return (
    <header
      className={`
        kc-header
        ${scrolled ? 'kc-header--scrolled' : ''}
        ${props.className || ''}
      `}
    >
      {props.children}
    </header>
  )
}

Header.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  scrollOffset: PropTypes.number,
}

Header.defaultProps = {
  style: {},
  scrollOffset: 32,
}

export default Header
