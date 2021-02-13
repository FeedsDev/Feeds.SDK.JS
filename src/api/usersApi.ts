import axios from '../utils/axios'
import { USERS_API_URL } from '../config'

interface IUserReq {
  workspaceId: number,
  userId: number,
  body?: object
}

export const getUserApi = ({ workspaceId, userId }: IUserReq) => (
  axios.get(`${USERS_API_URL}/v1/pages/${workspaceId}/customers/${userId}`)
    .catch(err => {
      throw (err)
    })
)

export const updateUser = ({ workspaceId, userId, body }: IUserReq) => (
  axios.put(`${USERS_API_URL}/v1/pages/${workspaceId}/customers/${userId}`, body)
    .catch(err => {
      throw (err)
    })
)