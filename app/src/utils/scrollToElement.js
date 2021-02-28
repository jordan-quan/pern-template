/**
 * Scroll to a specific DOM element
 * @param {string} selector a css selector of the DOM element to scroll to
 */
export const scrollToElement = (selector) => {
  const element = document.querySelector(selector)
  element.scrollIntoView({ behavior: 'smooth', block: 'end' })
}
