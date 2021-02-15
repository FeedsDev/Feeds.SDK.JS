import { AxiosError } from 'axios'

class SDKError {
  errors: object
  status: number | undefined

  constructor(error: AxiosError) {
    this.errors = error?.response?.data
    this.status = error?.response?.status
  }
}

export default SDKError