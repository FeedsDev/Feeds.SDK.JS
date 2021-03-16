import { IOptions } from '../types'
import { AxiosResponse } from 'axios'
import * as api from '../api'
import { IUpdateUserReq, IUserRes } from './types'

export default class Users {
  workspaceId: number

  constructor({ workspaceId }: IOptions) {
    this.workspaceId = workspaceId
  }

  getUser(userId: string): Promise<AxiosResponse<IUserRes>> {
    return api.getUserApi({ workspaceId: this.workspaceId, userId })
  }

  updateUser(userId: string, body: IUpdateUserReq): Promise<AxiosResponse<IUserRes>> {
    return api.updateUser({ workspaceId: this.workspaceId, userId, body })
  }
}