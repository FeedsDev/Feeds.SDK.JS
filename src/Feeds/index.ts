import { IOptions } from '../types'
import * as api from '../api'

export default class Feeds {
  workspaceId: number

  constructor({ workspaceId }: IOptions) {
    this.workspaceId = workspaceId
  }

  getFeed(feedId: number, pageToken: string, body: object) {
    return api.getFeedApi({ workspaceId: this.workspaceId, feedId, pageToken, body })
  }
}