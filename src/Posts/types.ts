type PropTypes = string | boolean | number

interface IProperty {
  id: number,
  value: PropTypes,
  name?: string,
  type?: string
}

export interface IPostReq {
  properties: IProperty[]
}

export interface IPostRes {
  post: {
    id: string,
    status: string,
    properties?: IProperty[]
  }
}

export interface IPostSearchReq {
  query: string,
  postType: number,
  properties: Array<number>
}

export interface IPostSearchRes {
  hasMore: boolean,
  pageToken: string,
  posts: Array<any>
}