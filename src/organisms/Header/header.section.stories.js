import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, optionsKnob } from '@storybook/addon-knobs'

import Header from './index'
import { headerSectionAlignments, headerSectionVAlignments } from './HeaderSection'
import { Type } from '../../atoms/Type'

const sectionStyles = { backgroundColor: 'rgba(0,0,0,0.2)', padding: '0.25em' }

const headerSectionAlignmentsObj = headerSectionAlignments.reduce((prev, curr) => {
  prev[curr] = curr
  return prev
}, {})

const headerSectionVAlignmentsObj = headerSectionVAlignments.reduce((prev, curr) => {
  prev[curr] = curr
  return prev
}, {})

const optionsKnobOptions = {
  display: 'select',
}

storiesOf('Organisms/Header/Section', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    return (
      <Header>
        <Header.Logo />
        <Header.Section
          style={sectionStyles}
          align={optionsKnob('align', headerSectionAlignmentsObj, 'left', optionsKnobOptions)}
          verticalAlign={optionsKnob(
            'verticalAlign',
            headerSectionVAlignmentsObj,
            'stretch',
            optionsKnobOptions
          )}
        >
          <Type>{text('text', 'Here is another section on the header')}</Type>
        </Header.Section>
      </Header>
    )
  })
  .add('alignment', () => {
    return (
      <Header>
        <Header.Logo />
        <Header.Section
          style={sectionStyles}
          align={optionsKnob('align', headerSectionAlignmentsObj, 'right', optionsKnobOptions)}
          verticalAlign={optionsKnob(
            'verticalAlign',
            headerSectionVAlignmentsObj,
            'bottom',
            optionsKnobOptions
          )}
        >
          <Type>{text('text', 'Here is another section on the header')}</Type>
        </Header.Section>
      </Header>
    )
  })
  .add('multiple sections', () => {
    return (
      <Header>
        <Header.Logo />
        <Header.Section
          style={sectionStyles}
          align={optionsKnob(
            'section 1 - align',
            headerSectionAlignmentsObj,
            'left',
            optionsKnobOptions
          )}
          verticalAlign={optionsKnob(
            'section 1 - verticalAlign',
            headerSectionVAlignmentsObj,
            'top',
            optionsKnobOptions
          )}
        >
          <Type>{text('section 1 - text', 'Left + Top Aligned')}</Type>
        </Header.Section>

        <Header.Section
          style={sectionStyles}
          align={optionsKnob(
            'section 2 - align',
            headerSectionAlignmentsObj,
            'center',
            optionsKnobOptions
          )}
          verticalAlign={optionsKnob(
            'section 2 - verticalAlign',
            headerSectionVAlignmentsObj,
            'middle',
            optionsKnobOptions
          )}
        >
          <Type>{text('section 2 - text', 'Center + Middle Aligned')}</Type>
        </Header.Section>

        <Header.Section
          style={sectionStyles}
          align={optionsKnob(
            'section 3 - align',
            headerSectionAlignmentsObj,
            'right',
            optionsKnobOptions
          )}
          verticalAlign={optionsKnob(
            'section 3 - verticalAlign',
            headerSectionVAlignmentsObj,
            'bottom',
            optionsKnobOptions
          )}
        >
          <Type>{text('section 3 - text', 'Right + Bottom Aligned')}</Type>
        </Header.Section>
      </Header>
    )
  })
