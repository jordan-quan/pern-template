import { useLocalStorage } from './useLocalStorage'
import { AUTH_TOKEN } from 'constants/.'

/**
 * Auth token hook; basic wrapper on useLocalStorage
 *
 * @returns specific usecase local storage hook
 */
export const useAuthToken = () => useLocalStorage([AUTH_TOKEN])
