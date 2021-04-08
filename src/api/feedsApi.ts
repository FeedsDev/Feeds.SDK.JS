import axios from '../utils/axios'
import generateError from '../utils/Error'
import { FEED_API_URL } from '../config'

interface IFeedReq {
  workspaceId: number,
  feedId?: number,
  body?: object,
  pageToken?: string
}

export const getFeedApi = ({ workspaceId, feedId, pageToken, body }: IFeedReq) => {
  const url = `${FEED_API_URL}/pages/${workspaceId}/feed/${feedId}${pageToken ? `?pageToken=${pageToken}` : ''}`
  return axios.post(url, body)
    .then(res => res.data)
    .catch(err => generateError(err))
}