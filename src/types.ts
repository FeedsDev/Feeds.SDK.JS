export interface IOptions {
  accessToken: string,
  workspaceId: number
}

export interface IFeeds {
  getFeed: (feedId: number) => Promise<any>
}

export interface IPosts {
  getPost: (postId: number) => Promise<any>,
  createPost: (body: any) => Promise<any>,
  updatePost: (postId: number, body: any) => Promise<any>
}

export interface IUsers {
  getUser: (userId: number) => Promise<any>
  updateUser: (userId: number, body: any) => Promise<any>
}