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