import React from 'react'
import PropTypes from 'prop-types'

export const profilePicturePlatforms = [
  '',
  'twitter',
  'instagram',
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
  src: PropTypes.string,
  platform: PropTypes.oneOf(profilePicturePlatforms),
  className: PropTypes.string,
  style: PropTypes.object,
}

ProfilePicture.defaultProps = {
  style: {},
}

export default ProfilePicture
