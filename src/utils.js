import PropTypes from 'prop-types'

export const ucFirst = (str) => {
  if (str === 'youtube') return 'YouTube'
  return typeof str === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : str
}

export const pad = (nVal, width, zVal) => {
  const z = zVal || '0'
  const n = `${nVal}`
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
}

export const componentToHex = (c) => {
  const hex = c.toString(16)
  return hex.length == 1 ? `0${hex}` : hex
}

export const rgbToHex = (r, g, b) => {
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
}

export const lightOrDark = (x) => {
  // Variables for red, green, blue values
  let color = x
  let r
  let g
  let b

  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {
    // If HEX --> store the red, green, blue values in separate variables
    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)

    r = color[1]
    g = color[2]
    b = color[3]
  } else {
    // If RGB --> Convert it to HEX: http://gist.github.com/983661
    color = +`0x${color.slice(1).replace(color.length < 5 && /./g, '$&$&')}`

    r = color >> 16
    g = (color >> 8) & 255
    b = color & 255
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))

  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
    return 'light'
  }

  return 'dark'
}

export const eventTrackPropShape = {
  category: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  properties: PropTypes.object,
  value: PropTypes.number,
}

export const eventTrackPropToAttributes = (eventTrack) => {
  const obj = {}
  if (eventTrack) {
    if (eventTrack.category) obj['data-eventtrack-category'] = eventTrack.category
    if (eventTrack.action) obj['data-eventtrack-action'] = eventTrack.action
    if (eventTrack.value) obj['data-eventtrack-value'] = eventTrack.value
    if (eventTrack.properties) {
      Object.keys(eventTrack.properties).forEach((key) => {
        obj[`data-eventtrack-${key}`] = eventTrack.properties[key]
      })
    }
  }
  return obj
}

/**
 * Returns a new array with numeric values duplicated as strings.
 * Needed because knobs addon requires optionsKnob values to be strings
 * and will throw a console error if they aren't.
 * @param {array} arr
 * @returns {array}
 */
export const duplicateNumbersAsStrings = (arr) => [
  ...arr,
  ...arr.filter((x) => typeof x === 'number').map((x) => x.toString()),
]
