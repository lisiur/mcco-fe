import axios from 'axios'
import Vue from 'vue'

class CustomError extends Error {
  constructor(message, data) {
    super(message)
    this.data = data
  }
}

const instance = axios.create()

instance.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  if (!response.config.responseType || response.config.responseType === 'json') {
    if (!response.data.success) {
      Vue.prototype.$message.error(response.data.errMsg)
      return Promise.reject(new CustomError(response.data.errMsg, response))
    }
  }
  return response
}, function (error) {
  return Promise.reject(error)
})

export default instance
