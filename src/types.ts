import { IFeedRes } from './Feeds/types'
import { AxiosResponse } from 'axios'
import { IPostRes, IPostReq } from './Posts/types'
import { IUserRes, IUpdateUserReq } from './Users/types'

export interface IOptions {
  accessToken: string,
  refreshToken: string,
  workspaceId: number
}

export interface IFeeds {
  getFeed: (feedId: number, pageToken?: string, body?: object) => Promise<void | AxiosResponse<IFeedRes>>
}

export interface IPosts {
  getPost: (postId: string) => Promise<void | AxiosResponse<IPostRes>>,
  createPost: (body: IPostReq) => Promise<void | AxiosResponse<IPostRes>>,
  publishPost: (postId: string) => Promise<void | AxiosResponse<IPostRes>>,
  updatePost: (postId: string, body: IPostReq) => Promise<void | AxiosResponse<IPostRes>>
}

export interface IUsers {
  getUser: (userId: string) => Promise<void | AxiosResponse<IUserRes>>
  updateUser: (userId: string, body: IUpdateUserReq) => Promise<void | AxiosResponse<IUserRes>>
}