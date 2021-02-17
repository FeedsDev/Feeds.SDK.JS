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
    id: number,
    uniqueId?: string,
    properties?: IProperty[]
  }
}