import axios from 'axios'
import { IOptions } from '../types'
import { USERS_API_URL } from '../config'

let axiosInstance = axios.create()

export const getAxiosInstance = () => axiosInstance

const isRefreshToken = (url: string, workspaceId: number) => (
  url === `${USERS_API_URL}/pages/${workspaceId}/customers/refreshToken`
)

export const setAxiosConfig = (config: IOptions): void => {
  axiosInstance = axios.create()
  let refreshedData: IOptions
  let retry = false

  axiosInstance.interceptors.request.use(
    (axiosConfig) => {
      if (isRefreshToken(axiosConfig.url!, config.workspaceId)) {
        axiosConfig.headers.Authorization = `Bearer ${retry ? refreshedData.refreshToken : config.refreshToken}`
      } else {
        axiosConfig.headers.Authorization = `Bearer ${retry ? refreshedData.accessToken : config.accessToken}`
      }

      return axiosConfig
    }
  )

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      const originalRequest = error.config

      if (error.response.status !== 401) {
        return Promise.reject(error)
      }

      if (isRefreshToken(originalRequest.url, config.workspaceId)) {
        return Promise.reject(error)
      }

      axios.defaults.headers.common['Authorization'] = `Bearer ${retry ? refreshedData.refreshToken : config.refreshToken}`

      retry = true

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

            originalRequest.headers['Authorization'] = 'Bearer ' + accessToken

            return axiosInstance(originalRequest)
          }
          return Promise.reject(error)
        })
    }
  )
}

export default axiosInstance