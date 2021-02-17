interface IFilter {
  value: string,
  operator: string,
  propertyId: number
}

interface ISource {
  sourceId: string
}

interface IRule {
  id: number,
  title: string,
  filterType: string,
  filters: IFilter[],
  sorting: {
    order: string,
    propertyId: number
  },
  sources: ISource[]
}

export interface IFeedRes {
  feed: {
    id: number,
    title: string,
    rules?: IRule[]
  }
}