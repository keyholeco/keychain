import { addDecorator, addParameters, configure } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withA11y } from '@storybook/addon-a11y'
import keyholeTheme from './keyholeTheme'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addParameters({
  options: {
    theme: keyholeTheme,
  }
})

addDecorator(withInfo)
addDecorator(withA11y)

configure(loadStories, module)
