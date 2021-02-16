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
    id: number,
    status: string,
    properties?: IProperty[]
  }
}