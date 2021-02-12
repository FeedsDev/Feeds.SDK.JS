import { IOptions } from '../types'

export default class Feeds {
  options: IOptions

  /**
    * Initiate client instance
    * @param options Required. Set options for HTTP requests
  */
  constructor(options: IOptions) {
    this.options = options
  }

  getFeed() {
    console.log('Feed')
  }

  getFilteredFeeds() {
    console.log('Filtered feeds')
  }
}