import React from 'react'

import Type, { H1, H2, H3, H4 } from './index'

const copy = 'Every great relationship starts with listening.'

export default {
  component: Type,
  title: 'Atoms/Type',
  decorators: [
    (Story) => (
      <div style={{ margin: '1em' }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args) => {
  const TagType = args.tagType || Type
  return <TagType children={copy} {...args} />
}

export const Default = Template.bind({})

export const Bold = Template.bind({})
Bold.args = { bold: true }

export const Light = Template.bind({})
Light.args = { light: true }

export const Weight = Template.bind({})
Weight.args = { weight: 300 }

export const Italics = Template.bind({})
Italics.args = { italics: true }

export const Heading = Template.bind({})
Heading.args = { heading: true }

export const Caps = Template.bind({})
Caps.args = { caps: true }

export const Size = Template.bind({})
Size.args = { size: 'xxxl' }

export const h1 = Template.bind({})
h1.args = { tagType: H1 }

export const h2 = Template.bind({})
h2.args = { tagType: H2 }

export const h3 = Template.bind({})
h3.args = { tagType: H3 }

export const h4 = Template.bind({})
h4.args = { tagType: H4 }
