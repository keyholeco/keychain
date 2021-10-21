import React from 'react'

import ProfilePicture, { profilePicturePlatforms } from './index'

export default {
  component: ProfilePicture,
  title: 'Molecules/Profile Picture',
  decorators: [
    (Story) => (
      <div style={{ margin: '1em' }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args) => <ProfilePicture {...args} />

export const Basic = Template.bind({})
Basic.args = { platform: 'twitter', src: 'https://cdn.keyhole.co/img/favicon.png' }

export const NoUrls = () => (
  <div>
    {profilePicturePlatforms.map((platform) => (
      <ProfilePicture
        key={`profilepic-${platform}`}
        style={{ margin: '.25em' }}
        platform={platform}
      />
    ))}
  </div>
)

export const WithUrls = () => (
  <div>
    {[
      'https://cdn.keyhole.co/images/about-us-new/team/hussain.jpg',
      'https://cdn.keyhole.co/images/about-us-new/team/sam.jpg',
      'https://cdn.keyhole.co/images/about-us-new/team/laura.jpg',
      'https://cdn.keyhole.co/images/about-us-new/team/joann.jpg',
      'https://cdn.keyhole.co/images/about-us-new/team/minaz.jpg',
      'https://cdn.keyhole.co/images/about-us-new/team/amar.jpg',
      'https://cdn.keyhole.co/branding/symbol/keyhole-symbol-yellow.png',
      'https://cdn.keyhole.co/branding/symbol/keyhole-symbol-blue.png',
      'https://cdn.keyhole.co/user_logos/203518_logo_secondary.png?v=1866382919',
      'https://cdn.keyhole.co/user_logos/203518_logo.png?v=764696917',
    ].map((url, index) => (
      <ProfilePicture
        key={`profilepic-${index}`}
        style={{ margin: '.25em' }}
        src={url}
        platform={profilePicturePlatforms[index]}
      />
    ))}
  </div>
)
