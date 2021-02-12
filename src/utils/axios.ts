import axios from 'axios'
import { IOptions } from '../types'

const axiosInstance = axios.create()

export const setAxiosConfig = (config: IOptions): void => {
  axiosInstance.interceptors.request.use(
    (axiosConfig) => {

      if (config) {
        axiosConfig.headers.Authorization = `Bearer ${config.accessToken}`
      }

      return axiosConfig
    }
  )

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
  )
}

export default axiosInstance