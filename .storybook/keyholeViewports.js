import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

const keyholeViewports = {
  viewport: {
    viewports: {
      dashboardPdfExport: {
        name: 'Dashboard PDF export',
        styles: {
          width: '1500px',
          height: '800px',
        },
        type: 'desktop'
      },
      gaDesktopOne: {
        name: 'GA Desktop 1',
        styles: {
          width: '1366px',
          height: '768px',
        },
        type: 'desktop'
      },
      gaDesktopTwo: {
        name: 'GA Desktop 2',
        styles: {
          width: '1920px',
          height: '1080px',
        },
        type: 'desktop'
      },
      gaDesktopThree: {
        name: 'GA Desktop 3',
        styles: {
          width: '1440px',
          height: '900px',
        },
        type: 'desktop'
      },
      gaDesktopFour: {
        name: 'GA Desktop 4',
        styles: {
          width: '1024px',
          height: '768px',
        },
        type: 'desktop'
      },
      gaDesktopFive: {
        name: 'GA Desktop 5',
        styles: {
          width: '1280px',
          height: '800px',
        },
        type: 'desktop'
      },
      gaMobileOne: {
        name: 'GA Mobile 1',
        styles: {
          width: '360px',
          height: '640px',
        },
        type: 'mobile'
      },
      gaMobileTwo: {
        name: 'GA Mobile 2',
        styles: {
          width: '375px',
          height: '667px',
        },
        type: 'mobile'
      },
      gaMobileThree: {
        name: 'GA Mobile 3',
        styles: {
          width: '414px',
          height: '736px',
        },
        type: 'mobile'
      },
      ...INITIAL_VIEWPORTS
    }
  }
}

export default keyholeViewports
