type PropTypes = string | boolean | number

interface IProperty {
  id: number,
  value: PropTypes,
  name?: string,
  type?: string
}

export interface IUpdateUserReq {
  properties: IProperty[]
}

export interface IUserRes {
  customer: {
    id: string,
    uniqueId?: string,
    customerType: number,
    properties?: IProperty[]
  }
}

export interface IUserSearchReq {
  query: string,
  postType: number,
  properties: Array<number>
}

export interface IUserSearchRes {
  hasMore: boolean,
  pageToken: string,
  customers: Array<any>
}