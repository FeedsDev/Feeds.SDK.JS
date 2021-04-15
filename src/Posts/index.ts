import { IOptions } from '../types'
import * as api from '../api'
import { IPostReq, IPostSearchReq } from './types'

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

  publishPost(postId: string) {
    return api.publishPostApi({ workspaceId: this.workspaceId, postId })
  }

  updatePost(postId: string, body: IPostReq) {
    return api.updatePostApi({ workspaceId: this.workspaceId, postId, body })
  }

  searchPosts(body: IPostSearchReq, pageToken?: string) {
    return api.searchPosts({ workspaceId: this.workspaceId, body, pageToken })
  }
}