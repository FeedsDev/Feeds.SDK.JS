import axios from '../utils/axios'
import generateError from '../utils/Error'
import { USERS_API_URL, USERS_SEARCH_API_URL } from '../config'
import { IUserSearchReq } from 'Users/types'

interface IUserReq {
  workspaceId: number,
  userId?: string,
  body?: object
}

interface ISearchReq {
  workspaceId: number,
  pageToken?: string,
  body: IUserSearchReq
}

export const getUserApi = ({ workspaceId, userId }: IUserReq) => (
  axios.get(`${USERS_API_URL}/pages/${workspaceId}/customers/${userId}`)
    .catch(err => generateError(err))
)

export const updateUser = ({ workspaceId, userId, body }: IUserReq) => (
  axios.put(`${USERS_API_URL}/pages/${workspaceId}/customers/${userId}`, body)
    .catch(err => generateError(err))
)

export const searchUsers = ({ workspaceId, body, pageToken }: ISearchReq) => {
  const token = pageToken ? `?pageToken=${pageToken}` : ''
  return axios.post(`${USERS_SEARCH_API_URL}/pages/${workspaceId}/search${token}`, body)
    .catch(err => generateError(err))
}