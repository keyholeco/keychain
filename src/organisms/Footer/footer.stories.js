import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, color } from '@storybook/addon-knobs'

import Footer from './index'
import { Icon, Type } from '../../../dist'

storiesOf('Organisms/Footer', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    return (
      <Footer backgroundColor={color('backgroundColor', '#FFD433')}>
        {footerLinks}
        {footerBottomLight}
      </Footer>
    )
  })
  .add('dark', () => {
    return (
      <Footer backgroundColor={color('backgroundColor', '#26293C')}>
        {footerLinks}
        {footerBottomDark}
      </Footer>
    )
  })

const footerLinks = (
  <Footer.Section className="kc-footerSection--wrapper">
    <Footer.Section className="kc-footerSection--linkContainer">
      <Type className="kc-footer__heading" bold>
        Keyhole for
      </Type>
      <Type className="kc-footer__link">
        <a href="#">Enterprise</a>
      </Type>
      <Type className="kc-footer__link">
        <a href="#">Agencies</a>
      </Type>
    </Footer.Section>
    <Footer.Section className="kc-footerSection--linkContainer">
      <Type className="kc-footer__heading" bold>
        Solutions
      </Type>
      <Type className="kc-footer__link">
        <a href="#">Campaign Tracking</a>
      </Type>
      <Type className="kc-footer__link">
        <a href="#">Brand Monitoring</a>
      </Type>
      <Type className="kc-footer__link">
        <a href="#">Event Monitoring</a>
      </Type>
      <Type className="kc-footer__link">
        <a href="#">Influencer Marketing</a>
      </Type>
      <Type className="kc-footer__link">
        <a href="#">Market Research</a>
      </Type>
    </Footer.Section>
    <Footer.Section className="kc-footerSection--linkContainer">
      <Type className="kc-footer__heading" bold>
        Platforms
      </Type>
      <Type className="kc-footer__link">
        <a href="#">Twitter Analytics</a>
      </Type>
      <Type className="kc-footer__link">
        <a href="#">Instagram Analytics</a>
      </Type>
      <Type className="kc-footer__link">
        <a href="#">Facebook Analytics</a>
      </Type>
      <Type className="kc-footer__link">
        <a href="#">YouTube Analytics</a>
      </Type>
      <Type className="kc-footer__link">
        <a href="#">Web Analytics</a>
      </Type>
    </Footer.Section>
    <Footer.Section className="kc-footerSection--linkContainer">
      <Type className="kc-footer__heading" bold>
        Products
      </Type>
      <Type className="kc-footer__link">
        <a href="#">BrandIQ (New)</a>
      </Type>
      <Type className="kc-footer__link">
        <a href="#">Advanced Suite</a>
      </Type>
      <Type className="kc-footer__link">
        <a href="#">Hashtag Tracking</a>
      </Type>
      <Type className="kc-footer__link">
        <a href="#">Social Account Monitoring</a>
      </Type>
      <Type className="kc-footer__link">
        <a href="#">Influencer Tracking</a>
      </Type>
    </Footer.Section>
    <Footer.Section className="kc-footerSection--linkContainer">
      <Type className="kc-footer__heading" bold>
        Company
      </Type>
      <Type className="kc-footer__link">
        <a href="#">About Us</a>
      </Type>
      <Type className="kc-footer__link">
        <a href="#">Plans &amp; Pricing</a>
      </Type>
      <Type className="kc-footer__link">
        <a href="#">Privacy Policy</a>
      </Type>
      <Type className="kc-footer__link">
        <a href="#">Terms of Service</a>
      </Type>
      <Type className="kc-footer__link">
        <a href="#">Join the Keyhole Team</a>
      </Type>
    </Footer.Section>
    <Footer.Section className="kc-footerSection--linkContainer">
      <Type className="kc-footer__heading" bold>
        Why Keyhole
      </Type>
      <Type className="kc-footer__link">
        <a href="#">Success Stories</a>
      </Type>
      <Type className="kc-footer__link">
        <a href="#">FAQs</a>
      </Type>
      <Type className="kc-footer__link">
        <a href="#">Contact Us</a>
      </Type>
      <Type className="kc-footer__link">
        <a href="#">Request a Demo</a>
      </Type>
    </Footer.Section>
  </Footer.Section>
)

const footerBottomLight = (
  <Footer.Bottom>
    <div className="kc-footerBottom__copyright">
      <img
        className="kc-footerBottom__keyholeLogo"
        src="https://cdn.keyhole.co/branding/logo/keyhole-logo-blue.png"
        alt="Keyhole"
      />
      <img
        className="kc-footerBottom__keyholeTagline"
        src="https://cdn.keyhole.co/branding/tagline/keyhole-tagline-blue.png"
        alt="The Internet Unlocked"
      />
      <Type className="kc-footerBottom__copyrightText">
        Copyright &copy; Keyhole 2019. All rights reserved.
      </Type>
    </div>
    <div className="kc-footerBottom__social">
      <a href="https://twitter.com/keyholeco" target="_blank">
        <Icon icon="twitter-square" type="brands" size="2x" />
      </a>
      <a href="https://www.facebook.com/keyholeco" target="_blank">
        <Icon icon="facebook" type="brands" size="2x" />
      </a>
      <a href="https://www.linkedin.com/company/keyhole-co" target="_blank">
        <Icon icon="linkedin" type="brands" size="2x" />
      </a>
    </div>
  </Footer.Bottom>
)

const footerBottomDark = (
  <Footer.Bottom className="kc-footerBottom--dark">
    <div className="kc-footerBottom__copyright">
      <img
        className="kc-footerBottom__keyholeLogo"
        src="https://cdn.keyhole.co/branding/logo/keyhole-logo-yellow.png"
        alt="Keyhole"
      />
      <img
        className="kc-footerBottom__keyholeTagline"
        src="https://cdn.keyhole.co/branding/tagline/keyhole-tagline-yellow.png"
        alt="The Internet Unlocked"
      />
      <Type className="kc-footerBottom__copyrightText">
        Copyright &copy; Keyhole 2019. All rights reserved.
      </Type>
    </div>
    <div className="kc-footerBottom__social">
      <a href="https://twitter.com/keyholeco" target="_blank">
        <Icon icon="twitter-square" type="brands" size="2x" />
      </a>
      <a href="https://www.facebook.com/keyholeco" target="_blank">
        <Icon icon="facebook" type="brands" size="2x" />
      </a>
      <a href="https://www.linkedin.com/company/keyhole-co" target="_blank">
        <Icon icon="linkedin" type="brands" size="2x" />
      </a>
    </div>
  </Footer.Bottom>
)
