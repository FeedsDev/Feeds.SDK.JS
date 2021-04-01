import axios from 'axios'
import { IOptions } from '../types'
import { USERS_API_URL } from '../config'

const axiosInstance = axios.create()

let retry = false
let refreshedData: IOptions

export const setAxiosConfig = (config: IOptions): void => {
  axiosInstance.interceptors.request.use(
    (axiosConfig) => {
      if (config && !retry) {
        axiosConfig.headers.Authorization = `Bearer ${config.accessToken}`
      }

      return axiosConfig
    }
  )

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      const originalRequest = error.config

      if (error.response.status === 401
        && originalRequest.url === `${USERS_API_URL}/pages/${config.workspaceId}/customers/refreshToken`) {
        return Promise.reject(error)
      }

      if (error.response.status === 401 && !retry) {
        retry = true
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + config.refreshToken

        return axios.get(`${USERS_API_URL}/pages/${config.workspaceId}/customers/refreshToken`)
          .then(res => {
            const {
              accessToken,
              refreshToken
            } = res.data

            if (res.status === 200) {
              refreshedData = {
                ...refreshedData,
                accessToken: accessToken,
                refreshToken: refreshToken,
                workspaceId: config.workspaceId
              }

              axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
              originalRequest.headers['Authorization'] = 'Bearer ' + accessToken

              return axiosInstance(originalRequest)
            }
            return axiosInstance(originalRequest)
          })
      }
      return Promise.reject(error)
    }
  )
}

export default axiosInstance