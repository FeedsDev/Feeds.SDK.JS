import { setAxiosConfig } from './utils/axios'
import Users from './Users'
import { IOptions, IFeeds, IPosts, IUsers } from './types'
import Posts from './Posts'
import Feeds from './Feeds'

export default class FeedsSDK {
  options: IOptions
  users: IUsers
  posts: IPosts
  feeds: IFeeds

  constructor(options: IOptions) {
    this.options = options
    this.users = new Users(options)
    this.posts = new Posts(options)
    this.feeds = new Feeds(options)
    this.init()
  }

  private init() {
    setAxiosConfig(this.options)
  }
}