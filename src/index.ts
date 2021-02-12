import { setAxiosConfig } from './utils/axios'
import Users from './Users'
import { IOptions } from './types'
import Posts from './Posts'
import Feeds from './Feeds'

export default class FeedsSDK {
  options: IOptions
  users: any
  posts: any
  feeds: any

  /**
    * Initiate client instance
    * @param options Required. Set options for HTTP requests
    */
  constructor(options: IOptions) {
    this.options = options
    this.users = new Users(options)
    this.posts = new Posts(options)
    this.feeds = new Feeds(options)
    this.init()
  }

  init() {
    setAxiosConfig(this.options)
  }
}

const opt = {
  accessToken: 'secret',
  workspaceId: 9
}

// FOR TEST
const client = new FeedsSDK(opt)
client.feeds.getFeed()