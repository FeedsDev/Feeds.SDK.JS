import { getAxiosInstance } from '../utils/axios'
import generateError from '../utils/Error'
import { POSTS_API_URL } from '../config'
import { IPostSearchReq, IInteractionReq } from 'Posts/types'

interface IPostReq {
  workspaceId: number,
  postId?: string,
  body?: object
}

interface ISearchReq {
  workspaceId: number,
  pageToken?: string,
  body: IPostSearchReq
}

export const createPostApi = ({ workspaceId, body }: IPostReq) => (
  getAxiosInstance().post(`${POSTS_API_URL}/pages/${workspaceId}/posts`, body)
    .catch(err => generateError(err))
)

export const publishPostApi = ({ workspaceId, postId }: IPostReq) => (
  getAxiosInstance().post(`${POSTS_API_URL}/pages/${workspaceId}/posts/${postId}/status`, { status: 'active' })
    .catch(err => generateError(err))
)

export const getPostApi = ({ workspaceId, postId }: IPostReq) => (
  getAxiosInstance().get(`${POSTS_API_URL}/pages/${workspaceId}/posts/${postId}`)
    .catch(err => generateError(err))
)

export const updatePostApi = ({ workspaceId, postId, body }: IPostReq) => (
  getAxiosInstance().put(`${POSTS_API_URL}/pages/${workspaceId}/posts/${postId}`, body)
    .catch(err => generateError(err))
)

export const searchPosts = ({ workspaceId, body, pageToken }: ISearchReq) => {
  const token = pageToken ? `?pageToken=${pageToken}` : ''
  return getAxiosInstance().post(`${POSTS_API_URL}/pages/${workspaceId}/search${token}`, body)
    .catch(err => generateError(err))
}

export const deletePostApi = ({ workspaceId, postId }: IPostReq) => (
  getAxiosInstance().delete(`${POSTS_API_URL}/pages/${workspaceId}/posts/${postId}`)
    .catch(err => generateError(err))
)

export const trackInteractionApi = ({ workspaceId, id, body }: IInteractionReq) => (
  getAxiosInstance().post(`${POSTS_API_URL}/pages/${workspaceId}/interactions/${id}/track`, body)
    .catch(err => generateError(err))
)