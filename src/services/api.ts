import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VUE_BASE_URL
})

export default api
