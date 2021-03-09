import { IFeedRes } from './Feeds/types'
import { AxiosResponse } from 'axios'
import { IPostRes, IPostReq } from './Posts/types'
import { IUserRes, IUpdateUserReq } from './Users/types'
import { IError } from './utils/Error'

export interface IOptions {
  accessToken: string,
  workspaceId: number
}

export interface IFeeds {
  getFeed: (feedId: number) => Promise<AxiosResponse<IFeedRes | IError>>
}

export interface IPosts {
  getPost: (postId: string) => Promise<AxiosResponse<IPostRes | IError>>,
  createPost: (body: IPostReq) => Promise<AxiosResponse<IPostRes | IError>>,
  updatePost: (postId: string, body: IPostReq) => Promise<AxiosResponse<IPostRes | IError>>
}

export interface IUsers {
  getUser: (userId: string) => Promise<AxiosResponse<IUserRes | IError>>
  updateUser: (userId: string, body: IUpdateUserReq) => Promise<AxiosResponse<IUserRes | IError>>
}