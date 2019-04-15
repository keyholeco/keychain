import React from 'react'
import { storiesOf } from '@storybook/react'

import ProfilePicture from './index'

const parentStyles = { fontSize: '1.25em', display: 'flex', alignItems: 'center' }
const picStyles = { margin: '0.25em' }

storiesOf('Molecules/ProfilePicture', module)
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
      <ProfilePicture
        src="https://cdn.keyhole.co/images/about-us-new/team/amar.jpg"
        style={picStyles}
      />
      <ProfilePicture
        src="https://cdn.keyhole.co/images/about-us-new/team/hussain.jpg"
        platform="twitter"
        style={picStyles}
      />
      <ProfilePicture
        src="https://cdn.keyhole.co/images/about-us-new/team/sam.jpg"
        platform="instagram"
        style={picStyles}
      />
      <ProfilePicture
        src="https://cdn.keyhole.co/images/about-us-new/team/laura.jpg"
        platform="youtube"
        style={picStyles}
      />
      <ProfilePicture
        src="https://cdn.keyhole.co/images/about-us-new/team/joann.jpg"
        platform="facebook"
        style={picStyles}
      />
      <ProfilePicture
        src="https://cdn.keyhole.co/user_logos/203518_logo_secondary.png?v=1866382919"
        platform="news"
        style={picStyles}
      />
      <ProfilePicture
        src="https://cdn.keyhole.co/user_logos/203518_logo.png?v=764696917"
        platform="blogs"
        style={picStyles}
      />
      <ProfilePicture
        src="https://cdn.keyhole.co/images/about-us-new/team/minaz.jpg"
        platform="forums"
        style={picStyles}
      />
    </div>
  ))
