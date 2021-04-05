import axios from '../utils/axios'
import generateError from '../utils/Error'
import { USERS_API_URL } from '../config'

interface IUserReq {
  workspaceId: number,
  userId?: string,
  body?: object
}

export const getUserApi = ({ workspaceId, userId }: IUserReq) => (
  axios.get(`${USERS_API_URL}/pages/${workspaceId}/customers/${userId}`)
    .catch(err => generateError(err))
)

export const updateUser = ({ workspaceId, userId, body }: IUserReq) => (
  axios.put(`${USERS_API_URL}/pages/${workspaceId}/customers/${userId}`, body)
    .catch(err => generateError(err))
)