import { getAxiosInstance } from '../utils/axios'
import generateError from '../utils/Error'
import { FEED_API_URL } from '../config'

interface IFeedReq {
  workspaceId: number,
  feedId?: number,
  body?: any,
  pageToken?: string
}

export const getFeedApi = ({ workspaceId, feedId, pageToken, body }: IFeedReq) => {

  if (body == undefined){
    body = {pageToken: pageToken};
  }
  else{
    body.pageToken = pageToken;
  }

  const url = `${FEED_API_URL}/pages/${workspaceId}/feed/${feedId}`
  return getAxiosInstance().post(url, body)
    .then(res => res.data)
    .catch(err => generateError(err))
}