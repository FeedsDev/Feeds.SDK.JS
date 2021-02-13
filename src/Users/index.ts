import { IOptions } from '../types'
import * as api from '../api'

export default class Users {
  workspaceId: number

  /**
    * Initiate client instance
    * @param options Required. Set options for HTTP requests
    */
  constructor({ workspaceId }: IOptions) {
    this.workspaceId = workspaceId
  }

  /**
    * Params for get user info
    * @param {number} userId Required. User identifier which shold be updated
    * @return {Promise<object>}
    */
  getUser(userId: number) {
    return api.getUserApi({ workspaceId: this.workspaceId, userId })
  }

  /**
    * Params for get user info
    * @param {number} userId Required. User identifier which shold be updated
    * @param {any} body Optional. Properties to update
    * @return {Promise<object>}
    */
  updateUser(userId: number, body: any) {
    return api.updateUser({ workspaceId: this.workspaceId, userId, body })
  }
}