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


// USAGE
const opt = {
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbiI6eyJ1c2VySWQiOjEsImZ1bGxOYW1lIjoiUm9tYW4gUGFza2EiLCJwYWdlc1Blcm1pc3Npb25zIjpbeyJwYWdlSWQiOjgsInJvbGUiOiJhZG1pbiJ9LHsicGFnZUlkIjo5LCJyb2xlIjoiYWRtaW4ifSx7InBhZ2VJZCI6MTAsInJvbGUiOiJhZG1pbiJ9LHsicGFnZUlkIjoxMSwicm9sZSI6ImFkbWluIn0seyJwYWdlSWQiOjEyLCJyb2xlIjoiYWRtaW4ifSx7InBhZ2VJZCI6MTMsInJvbGUiOiJhZG1pbiJ9LHsicGFnZUlkIjozMSwicm9sZSI6ImFkbWluIn0seyJwYWdlSWQiOjUxLCJyb2xlIjoiYWRtaW4ifSx7InBhZ2VJZCI6NTIsInJvbGUiOiJhZG1pbiJ9LHsicGFnZUlkIjo1OCwicm9sZSI6ImFkbWluIn1dfSwiaWF0IjoxNjEzNDA1MTUwLCJleHAiOjE2MTM0MDU0NTB9.s_mArX_UzBKqClwkCZPwspylJr7kCvUj_80qXXOXRzo",
  workspaceId: 9
}
// return data
// promise return model type
const client = new FeedsSDK(opt)

client.feeds.getFeed(23)
  .then((data: any) => {
    console.log('RES ', data)
  })
  .catch((e: any) => console.log('Error ', e))