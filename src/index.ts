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
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbiI6eyJ1c2VySWQiOjEsImZ1bGxOYW1lIjoiUm9tYW4gUGFza2EiLCJwYWdlc1Blcm1pc3Npb25zIjpbeyJwYWdlSWQiOjgsInJvbGUiOiJhZG1pbiJ9LHsicGFnZUlkIjo5LCJyb2xlIjoiYWRtaW4ifSx7InBhZ2VJZCI6MTAsInJvbGUiOiJhZG1pbiJ9LHsicGFnZUlkIjoxMSwicm9sZSI6ImFkbWluIn0seyJwYWdlSWQiOjEyLCJyb2xlIjoiYWRtaW4ifSx7InBhZ2VJZCI6MTMsInJvbGUiOiJhZG1pbiJ9LHsicGFnZUlkIjozMSwicm9sZSI6ImFkbWluIn0seyJwYWdlSWQiOjUxLCJyb2xlIjoiYWRtaW4ifSx7InBhZ2VJZCI6NTIsInJvbGUiOiJhZG1pbiJ9LHsicGFnZUlkIjo1OCwicm9sZSI6ImFkbWluIn1dfSwiaWF0IjoxNjEzMjIwOTE2LCJleHAiOjE2MTMyMjEyMTZ9.9fe8VPNk4oz-OMuE8_rZz4k3k5zOpfMwKCEay_gVakw",
  workspaceId: 9
}

// FOR TEST
// userId: 46
const req = {
  "properties": [
    { "id": 44, "value": "roman paska" },
  ]
}

const client = new FeedsSDK(opt)
client.users.updateUser(46, req)
  .then((res: any) => {
    console.log('RES ', res.data)
  })
  .catch((e: any) => console.log('RES EEEE', e))