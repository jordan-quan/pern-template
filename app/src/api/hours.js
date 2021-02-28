import axios from 'axios'
import { getAPIRoute } from 'utils'

export const getHoursStatuses = () => {
  switch (Window.config.env) {
    case 'development':
    case 'staging':
    case 'production':
      return axios.get(getAPIRoute('rest', 'hob/status'))
    default:
      return new Error()
  }
}
