import { IOptions } from '../types'
import * as api from '../api'
import { IUpdateUserReq } from './types'

export default class Users {
  workspaceId: number

  constructor({ workspaceId }: IOptions) {
    this.workspaceId = workspaceId
  }

  getUser(userId: number) {
    return api.getUserApi({ workspaceId: this.workspaceId, userId })
  }

  updateUser(userId: number, body: IUpdateUserReq) {
    return api.updateUser({ workspaceId: this.workspaceId, userId, body })
  }
}