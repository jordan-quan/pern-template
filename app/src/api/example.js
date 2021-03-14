import axios from 'axios'
import { getAPIRoute } from 'utils'

export const getData = () => {
  switch (Window.config.env) {
    case 'development':
    case 'staging':
    case 'production':
      return axios.get(getAPIRoute('rest', 'example'))
    default:
      return new Error()
  }
}
