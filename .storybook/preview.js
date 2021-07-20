import keyholeViewports from './keyholeViewports'

import '../dist/index.css'

export const parameters = {
  viewport: {
    viewports: keyholeViewports,
  },
  options: {
    storySort: {
      order: ['Design Tokens', '*'],
      method: 'alphabetical'
    }
  }
}
