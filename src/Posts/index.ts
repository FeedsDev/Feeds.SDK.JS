import { IOptions } from '../types'
import * as api from '../api'
import { IPostReq } from './types'

export default class Posts {
  workspaceId: number

  constructor({ workspaceId }: IOptions) {
    this.workspaceId = workspaceId
  }

  getPost(postId: string) {
    return api.getPostApi({ workspaceId: this.workspaceId, postId })
  }

  createPost(body: IPostReq) {
    return api.createPostApi({ workspaceId: this.workspaceId, body })
  }

  updatePost(postId: string, body: IPostReq) {
    return api.updatePostApi({ workspaceId: this.workspaceId, postId, body })
  }
}