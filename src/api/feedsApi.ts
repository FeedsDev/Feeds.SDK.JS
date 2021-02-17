import axios from '../utils/axios'
import SDKError from '../utils/Error'
import { POSTS_API_URL } from '../config'

interface IFeedReq {
  workspaceId: number,
  feedId?: number,
  body?: object
}

export const getFeedApi = ({ workspaceId, feedId }: IFeedReq) => (
  axios.get(`${POSTS_API_URL}/v1/pages/${workspaceId}/feeds/${feedId}`)
    .then(res => res.data)
    .catch(err => {
      throw new SDKError(err)
    })
)