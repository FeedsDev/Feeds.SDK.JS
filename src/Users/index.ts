import { IOptions } from '../types'

export default class Users {
  options: IOptions

  /**
    * Initiate client instance
    * @param options Required. Set options for HTTP requests
  */
  constructor(options: IOptions) {
    this.options = options
  }

  getUser() {
    console.log('USER')
  }

  updateUser() {
    console.log('Update user')
  }
}