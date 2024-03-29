import React from 'react'
import PropTypes from 'prop-types'

export const logoThemes = ['default', 'light', 'dark']

export const KeyholeLogo = (props) => {
  let foregroundFill = '#26293C'
  let backgroundFill = '#ffd433'

  switch (props.theme) {
    case 'light': {
      foregroundFill = '#26293C'
      backgroundFill = '#fff'
      break
    }
    case 'dark': {
      foregroundFill = '#ffd433'
      backgroundFill = '#26293C'
      break
    }
    default:
      break
  }

  return (
    <div className={props.className || null} style={props.style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-269 221 420 120"
        width="100%"
        height="100%"
        preserveAspectRatio="xMinYMax meet"
        className="kc-svg-keyholeLogoNew"
      >
        <path
          fill={foregroundFill}
          d="M130.8 301.9c-3 0-5.4 2.4-5.4 5.4s2.4 5.4 5.4 5.4 5.4-2.4 5.4-5.4C136.1 304.3 133.8 301.9 130.8 301.9z"
        />
        <path
          fill={backgroundFill}
          d="M130.8 312.1c-2.6 0-4.6-2.1-4.6-4.7s2-4.7 4.6-4.7 4.6 2.1 4.6 4.7S133.4 312.1 130.8 312.1z"
        />
        <path
          fill={foregroundFill}
          d="M132.9 306.2c0-1-0.6-1.8-1.9-1.8h-2v5.8h0.7V308h1.4l1 2.2h0.8l-1.1-2.3C132.5 307.6 132.9 306.9 132.9 306.2z"
        />
        <path
          fill={backgroundFill}
          d="M131 307.3h-1.3v-2.2h1.3c0.9 0 1.2 0.6 1.2 1.1S131.9 307.3 131 307.3z"
        />
        <path
          fill={foregroundFill}
          d="M-226.9 301.9c0 5.2 0.6 6 7.2 6.7v4.2h-34v-4.2c6.7-0.7 7.3-1.5 7.3-6.7v-48.3c0-5.2-0.6-6-7.3-6.7v-4.2h34v4.3c-6.6 0.7-7.2 1.5-7.2 6.7V301.9z"
        />
        <path
          fill={foregroundFill}
          d="M-188.9 302c2.8 4.1 4.6 6.1 9.1 6.6v4.2H-203c-3.3-2.8-6.5-7.1-9.1-11.5l-13.9-22.6 23.3-24.3c1.7-1.7 2.8-3.1 2.8-4.7 0-1.6-1.6-2.6-6.9-2.8v-4.2h23.6v4.3c-4.1 0.2-5.8 1-8.5 3.8l-17.9 19.2C-209.6 270-188.9 302-188.9 302z"
        />
        <path
          fill={foregroundFill}
          d="M-133.4 279.8v2.5h-31.8c-0.2 11.9 6.4 19.2 15.4 19.2 6.4 0 11.1-2.3 14.8-7.3l1.9 1.2c-2.7 11-10.4 18.2-22.9 18.2 -14.7 0-25.9-9.9-25.9-26.6 0-17.7 12.3-29.1 26.6-29.1C-140.7 258-133.4 267.2-133.4 279.8L-133.4 279.8z"
        />
        <path
          fill={backgroundFill}
          d="M-165 277.8h15.9c0-9.7-1.9-15.5-7.3-15.5C-161.8 262.2-164.5 268.5-165 277.8z"
        />
        <path
          fill={foregroundFill}
          d="M-88.1 269.3c0.5-1.3 0.8-2 0.8-2.9 0-2.2-1.4-2.8-6.6-3.5V259h17.1v3.9c-2.4 1.1-3.2 1.8-4.1 4l-22.7 54.5c-3.7 8.8-7.4 13.3-14.3 13.3 -3.9 0-7-1.6-8.4-4.2v-7.1c2.6 0.5 4.7 1 7.8 1 5.6 0 8.5-1.6 10.3-5.8l1.6-3.5 -22.7-48.3c-1-2.2-1.6-2.9-5.1-4V259h31.9v3.9c-5.3 0.7-6.6 1.3-6.6 3.5 0 0.9 0.3 1.6 0.7 2.8l10.4 25.4L-88.1 269.3 -88.1 269.3z"
        />
        <path
          fill={foregroundFill}
          d="M-73.3 245.1l-5.5-2.8v-3l20.8-4.6h3.1V268c3.8-4.8 9.5-10 18.5-10 9.6 0 15 5.5 15 16.3v30.6c0 3.2 1.6 3.6 5.6 3.9v3.9H-45v-3.9c4-0.3 5.3-0.7 5.3-3.9v-29c0-4.4-1.5-7-6.7-7 -3.2 0-6 0.9-8.5 2.2V305c0 3.2 1.3 3.6 5.3 3.9v3.9h-29.3v-3.9c4-0.3 5.6-0.7 5.6-3.9C-73.3 305-73.3 245.1-73.3 245.1z"
        />
        <path
          fill={foregroundFill}
          d="M65.9 304.9c0 3.2 1.6 3.6 5.6 3.9v3.9H41.9v-3.9c4-0.3 5.6-0.7 5.6-3.9v-59.8l-5.5-2.8v-3l20.8-4.6h3.1V304.9z"
        />
        <path
          fill={foregroundFill}
          d="M121.1 279.8v2.5H89.3c-0.2 11.9 6.4 19.2 15.4 19.2 6.4 0 11.1-2.3 14.8-7.3l1.9 1.2c-2.7 11-10.4 18.2-22.9 18.2 -14.7 0-25.9-9.9-25.9-26.6 0-17.7 12.3-29.1 26.6-29.1C113.7 258 121.1 267.2 121.1 279.8z"
        />
        <path
          fill={backgroundFill}
          d="M89.4 277.8h15.9c0-9.7-1.9-15.5-7.3-15.5C92.6 262.2 89.9 268.5 89.4 277.8z"
        />
        <path
          className="kc-svg-keyholeLogoNew__o"
          fill={foregroundFill}
          d="M12.6 257.4c-15.7 0-28.4 12.7-28.4 28.4 0 15.7 12.7 28.4 28.4 28.4S41 301.5 41 285.8C41.1 270.2 28.3 257.4 12.6 257.4L12.6 257.4z"
        />
        <path
          className="kc-svg-keyholeLogoNew__icon"
          fill={backgroundFill}
          d="M5.4 300l4-14.5c0.2-0.8-0.2-1.6-0.9-2.1 -2.2-1.4-3.6-3.9-3.6-6.6 0.1-4.1 3.5-7.6 7.6-7.6 4.3-0.1 7.9 3.4 7.9 7.7 0 2.8-1.5 5.2-3.7 6.6 -0.7 0.4-1 1.3-0.8 2.1l4 14.5c0.3 1-0.5 2-1.5 2H6.8c-0.9-0.1-1.6-0.9-1.5-1.8C5.4 300.2 5.4 300.1 5.4 300z"
        />
      </svg>
    </div>
  )
}

KeyholeLogo.propTypes = {
  /**
   * Style object that can be attached to the component.
   */
  style: PropTypes.object,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Default theme = dark blue icon with yellow fill. Meant to be used with yellow background.
   *
   * Light theme = dark blue icon with white fill. Meant to be used with white background.
   *
   * Dark theme = yellow icon with dark blue fill. Meant to be used with dark blue background.
   */
  theme: PropTypes.oneOf(logoThemes),
}

KeyholeLogo.defaultProps = {
  style: {},
  theme: 'default',
}

export default KeyholeLogo
