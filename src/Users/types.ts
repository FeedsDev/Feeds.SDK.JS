type PropTypes = string | boolean | number

interface IProperty {
  id: number,
  value: PropTypes
}

export interface IUpdateUserReq {
  properties: IProperty[]
}