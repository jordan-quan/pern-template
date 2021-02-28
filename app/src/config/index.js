/* eslint-disable import/no-dynamic-require */
const env = process.env.REACT_APP_ENV || process.env.NODE_ENV || 'development'
export default async () => {
  const configObject = await import(
    /* webpackMode: "eager" */
    `./${env}`
  )
  return configObject.default
}
