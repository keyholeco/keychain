import React from 'react'
import PropTypes from 'prop-types'

const ProfilePicture = (props) => {
  const [errored, setErrored] = React.useState(!props.src)
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
  platform: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
}

ProfilePicture.defaultProps = {
  style: {},
}

export default ProfilePicture
