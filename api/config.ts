import ENV from '@/data/env'
import axios from 'axios'

const EndPoint = {
  USERNAMES: '/v1/users',
  VERIFY_CREDENTIALS: '/v1/verify-credentials',
  CREATE_USER_CLOCK_IN_RECORD: '/v1/user/clock-in',
  CREATE_USER_CLOCK_OUT_RECORD: '/v1/user/clock-out',
  USER_HISTORY: '/v1/user/history',
}

const axiosInstance = axios.create({
  baseURL: ENV.TIMMY_API_BASE_URL,
})

axiosInstance.interceptors.request.use((config) => {
  // Do something before request is sent
  return config
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
})

export { axiosInstance, EndPoint }
