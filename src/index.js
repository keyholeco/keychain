/**
 * TODO: programmatically import and export all modules
 */

// Atoms
import ColorBlock from './atoms/ColorBlock'
import Icon from './atoms/Icon'
import Type, { H1, H2, H3, H4 } from './atoms/Type'
import KeyholeLogo from './atoms/KeyholeLogo'

// Molecules
import Button from './molecules/Button'
import ProfilePicture from './molecules/ProfilePicture'

// Organisms
import Header from './organisms/Header'
import Footer from './organisms/Footer'

// ##############################

// Atoms
export { ColorBlock }
export { Icon }
export { Type }
export { H1 }
export { H2 }
export { H3 }
export { H4 }
export { KeyholeLogo }

// Molecules
export { Button }
export { ProfilePicture }

// Organisms
export { Header }
export { Footer }

// ##############################

export default {
  // Atoms
  ColorBlock,
  Icon,
  Type,
  H1,
  H2,
  H3,
  H4,
  KeyholeLogo,

  // Molecules
  Button,
  ProfilePicture,

  // Organisms
  Header,
  Footer,
}
