import axios from '../utils/axios'
import generateError from '../utils/Error'
import { POSTS_API_URL } from '../config'

interface IPostReq {
  workspaceId: number,
  postId?: string,
  body?: object
}

export const createPostApi = ({ workspaceId, body }: IPostReq) => (
  axios.post(`${POSTS_API_URL}/pages/${workspaceId}/posts`, body)
    .catch(err => generateError(err))
)

export const publishPostApi = ({ workspaceId, postId }: IPostReq) => (
  axios.post(`${POSTS_API_URL}/pages/${workspaceId}/posts/${postId}/status`, { status: 'active' })
    .catch(err => generateError(err))
)

export const getPostApi = ({ workspaceId, postId }: IPostReq) => (
  axios.get(`${POSTS_API_URL}/pages/${workspaceId}/posts/${postId}`)
    .catch(err => generateError(err))
)

export const updatePostApi = ({ workspaceId, postId, body }: IPostReq) => (
  axios.put(`${POSTS_API_URL}/pages/${workspaceId}/posts/${postId}`, body)
    .catch(err => generateError(err))
)