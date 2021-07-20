import keyholeViewports from './keyholeViewports'

import '../dist/index.css'
import keyholeTheme from './keyholeTheme'

export const parameters = {
  viewport: {
    viewports: keyholeViewports,
  },
  options: {
    storySort: {
      order: ['Design Tokens', '*'],
      method: 'alphabetical'
    }
  },
  docs: {
    theme: keyholeTheme
  }
}
