export const ucFirst = (str) => {
  if (str === 'youtube') return 'YouTube'
  return typeof str === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : str
}

export const pad = (nVal, width, zVal) => {
  const z = zVal || '0'
  const n = `${nVal}`
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
}

export const getDocumentHeight = () =>
  Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  )

export const getScrollPosition = () =>
  Math.max(window.pageYOffset, document.body.scrollTop, document.documentElement.scrollTop, 0)
