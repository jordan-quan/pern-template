/**
 * Returns the current relevant API path based on environment
 *
 * @returns the full path of the url
 */
export const getAPIRoute = (type, path) => {
  if (Window.config) {
    if (type === 'graphql') return Window.config.graphqlRoute
    if (type === 'ws') return Window.config.wsRoute
    if (type === 'rest') return `${Window.config.restRoute}${path}`
  }
}
