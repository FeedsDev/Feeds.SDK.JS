import { IFeedRes } from './Feeds/types'
import { AxiosResponse } from 'axios'
import { IPostRes, IPostReq, IPostSearchReq, IPostSearchRes } from './Posts/types'
import { IUserRes, IUpdateUserReq, IUserSearchReq, IUserSearchRes } from './Users/types'

export interface IOptions {
  accessToken: string,
  refreshToken: string,
  workspaceId: number,
  apiDomain?: string
}

export interface IFeeds {
  getFeed: (feedId: number, pageToken?: string, body?: object) => Promise<void | AxiosResponse<IFeedRes>>
}

export interface IPosts {
  getPost: (postId: string) => Promise<void | AxiosResponse<IPostRes>>,
  createPost: (body: IPostReq) => Promise<void | AxiosResponse<IPostRes>>,
  publishPost: (postId: string) => Promise<void | AxiosResponse<IPostRes>>,
  updatePost: (postId: string, body: IPostReq) => Promise<void | AxiosResponse<IPostRes>>,
  searchPosts: (body: IPostSearchReq, pageToken?: string) => Promise<void | AxiosResponse<IPostSearchRes>>,
  deletePost: (postId: string) => Promise<void | AxiosResponse<IPostRes>>,
  trackInteraction: (id: string | number, body: any) => Promise<void | AxiosResponse<any>>
}

export interface IUsers {
  getUser: (userId: string) => Promise<void | AxiosResponse<IUserRes>>,
  updateUser: (userId: string, body: IUpdateUserReq) => Promise<void | AxiosResponse<IUserRes>>,
  searchUsers: (body: IUserSearchReq, pageToken?: string) => Promise<void | AxiosResponse<IUserSearchRes>>
}