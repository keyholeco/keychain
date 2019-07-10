import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object, optionsKnob } from '@storybook/addon-knobs'

import ProfilePicture, { profilePicturePlatforms } from './index'

const parentStyles = { fontSize: '1.25em', display: 'flex', alignItems: 'center' }
const picStyles = { margin: '0.25em' }

const profilePicturePlatformsObj = profilePicturePlatforms.reduce((prev, curr) => {
  prev[curr === '' ? '---' : curr] = curr
  return prev
}, {})

const optionsKnobOptions = {
  display: 'select',
}

storiesOf('Molecules/ProfilePicture', module)
  .addDecorator(withKnobs)
  .add('no url', () => {
    return (
      <div style={parentStyles}>
        {[...profilePicturePlatforms]
          .filter((x) => !!x)
          .map((platform, index) => (
            <ProfilePicture
              key={`profilepic-${index}`}
              style={object('style', picStyles)}
              platform={optionsKnob(
                `platform ${index + 1}`,
                profilePicturePlatformsObj,
                platform,
                optionsKnobOptions
              )}
            />
          ))}
      </div>
    )
  })
  .add('with url', () => {
    const urls = [
      'https://cdn.keyhole.co/images/about-us-new/team/amar.jpg',
      'https://cdn.keyhole.co/images/about-us-new/team/hussain.jpg',
      'https://cdn.keyhole.co/images/about-us-new/team/sam.jpg',
      'https://cdn.keyhole.co/images/about-us-new/team/laura.jpg',
      'https://cdn.keyhole.co/images/about-us-new/team/joann.jpg',
      'https://cdn.keyhole.co/user_logos/203518_logo_secondary.png?v=1866382919',
      'https://cdn.keyhole.co/user_logos/203518_logo.png?v=764696917',
      'https://cdn.keyhole.co/images/about-us-new/team/minaz.jpg',
    ]

    return (
      <div style={parentStyles}>
        {[...profilePicturePlatforms].map((platform, index) => (
          <ProfilePicture
            key={`profilepic-${index}`}
            style={object('style', picStyles)}
            src={text(`src ${index + 1}`, urls[index])}
            platform={optionsKnob(
              `platform ${index + 1}`,
              profilePicturePlatformsObj,
              platform,
              optionsKnobOptions
            )}
          />
        ))}
      </div>
    )
  })
