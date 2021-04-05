import axios from '../utils/axios'
import generateError from '../utils/Error'
import { FEED_API_URL } from '../config'

interface IFeedReq {
  workspaceId: number,
  feedId?: number,
  body?: object
}

export const getFeedApi = ({ workspaceId, feedId }: IFeedReq) => (
  axios.get(`${FEED_API_URL}/pages/${workspaceId}/feeds/${feedId}`)
    .then(res => res.data)
    .catch(err => generateError(err))
)