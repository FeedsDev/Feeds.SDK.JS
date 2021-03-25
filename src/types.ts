import { IFeedRes } from './Feeds/types'
import { AxiosResponse } from 'axios'
import { IPostRes, IPostReq } from './Posts/types'
import { IUserRes, IUpdateUserReq } from './Users/types'

export interface IOptions {
  accessToken: string,
  workspaceId: number
}

export interface IFeeds {
  getFeed: (feedId: number) => Promise<AxiosResponse<IFeedRes>>
}

export interface IPosts {
  getPost: (postId: string) => Promise<AxiosResponse<IPostRes>>,
  createPost: (body: IPostReq) => Promise<AxiosResponse<IPostRes>>,
  publishPost: (postId: string) => Promise<AxiosResponse<IPostRes>>,
  updatePost: (postId: string, body: IPostReq) => Promise<AxiosResponse<IPostRes>>
}

export interface IUsers {
  getUser: (userId: string) => Promise<AxiosResponse<IUserRes>>
  updateUser: (userId: string, body: IUpdateUserReq) => Promise<AxiosResponse<IUserRes>>
}