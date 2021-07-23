import React from 'react'
import PropTypes from 'prop-types'

export const profilePicturePlatforms = [
  '',
  'twitter',
  'instagram',
  'tiktok',
  'youtube',
  'facebook',
  'news',
  'blogs',
  'forums',
]

const ProfilePicture = (props) => {
  const [errored, setErrored] = React.useState(!props.src)

  React.useEffect(() => {
    setErrored(!props.src)
  }, [props.src])

  return (
    <div
      style={props.style}
      className={`kc-profilePicture kc-profilePicture--${props.platform || 'noPlatform'} ${
        errored ? 'kc-profilePicture--error' : ''
      } ${props.className || ''}`}
    >
      <img
        src={props.src}
        onError={() => {
          setErrored(true)
        }}
      />
    </div>
  )
}

ProfilePicture.propTypes = {
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Style object that can be attached to the component.
   */
  style: PropTypes.object,
  /**
   * Profile picture URL.
   */
  src: PropTypes.string,
  /**
   * For the upper right corner platform icon.
   */
  platform: PropTypes.oneOf(profilePicturePlatforms),
}

ProfilePicture.defaultProps = {
  style: {},
}

export default ProfilePicture
