import { addDecorator, addParameters, configure } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withA11y } from '@storybook/addon-a11y'
import keyholeTheme from './keyholeTheme'
import keyholeViewports from './keyholeViewports'

import '../dist/index.css'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addParameters({
  options: {
    theme: keyholeTheme,
  },
  ...keyholeViewports
})

addDecorator(withInfo) // info addon must sit on top of other decorators to work properly
addDecorator(withA11y)

configure(loadStories, module)
