import { IOptions } from '../types'

export default class Posts {
  options: IOptions

  /**
    * Initiate client instance
    * @param options Required. Set options for HTTP requests
  */
  constructor(options: IOptions) {
    this.options = options
  }

  getPost() {
    console.log('Post')
  }

  createPost() {
    console.log('Create post')
  }

  updatePost() {
    console.log('Update post')
  }
}