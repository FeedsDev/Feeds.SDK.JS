import { AxiosError } from 'axios'

export interface IError {
  errors: object
  status: number | undefined
}

class SDKError {
  errors: object
  status: number | undefined

  constructor(error: AxiosError) {
    this.errors = error?.response?.data.errors
    this.status = error?.response?.status
  }
}

const generateError = (error: any) => {
  if (error.response?.data.errors[0].code !== 112 && error.response?.data.errors[0].code !== 111) {
    throw new SDKError(error)
  }
}

export default generateError