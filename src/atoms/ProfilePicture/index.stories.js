import React from 'react'
import { storiesOf } from '@storybook/react'

import ProfilePicture from './index'

const parentStyles = { fontSize: '1.25em', display: 'flex', alignItems: 'center' }
const picStyles = { margin: '0.25em' }

storiesOf('Atoms/ProfilePicture', module)
  .add('no url', () => {
    return (
      <div style={parentStyles}>
        <ProfilePicture />
        <ProfilePicture src="" platform="twitter" style={picStyles} />
        <ProfilePicture src="" platform="instagram" style={picStyles} />
        <ProfilePicture src="" platform="youtube" style={picStyles} />
        <ProfilePicture src="" platform="facebook" style={picStyles} />
        <ProfilePicture src="" platform="news" style={picStyles} />
        <ProfilePicture src="" platform="blogs" style={picStyles} />
        <ProfilePicture src="" platform="forums" style={picStyles} />
      </div>
    )
  })
  .add('with url', () => (
    <div style={parentStyles}>
      <ProfilePicture src="https://randomuser.me/api/portraits/men/1.jpg" style={picStyles} />
      <ProfilePicture
        src="https://randomuser.me/api/portraits/men/2.jpg"
        platform="twitter"
        style={picStyles}
      />
      <ProfilePicture
        src="https://randomuser.me/api/portraits/men/3.jpg"
        platform="instagram"
        style={picStyles}
      />
      <ProfilePicture
        src="https://randomuser.me/api/portraits/men/4.jpg"
        platform="youtube"
        style={picStyles}
      />
      <ProfilePicture
        src="https://randomuser.me/api/portraits/men/5.jpg"
        platform="facebook"
        style={picStyles}
      />
      <ProfilePicture
        src="https://randomuser.me/api/portraits/men/6.jpg"
        platform="news"
        style={picStyles}
      />
      <ProfilePicture
        src="https://randomuser.me/api/portraits/men/7.jpg"
        platform="blogs"
        style={picStyles}
      />
      <ProfilePicture
        src="https://randomuser.me/api/portraits/men/8.jpg"
        platform="forums"
        style={picStyles}
      />
    </div>
  ))
