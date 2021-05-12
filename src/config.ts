export let USERS_API_URL: string
export let POSTS_API_URL: string
export let FEED_API_URL: string
export let USERS_SEARCH_API_URL: string

export const setConfigVariables = (name?: string) => {
  USERS_API_URL = name ? `https://users.${name}/api/v2` : 'https://users.api.feeds.dev/api/v2'
  POSTS_API_URL = name ? `https://posts.${name}/api/v2` : 'https://posts.api.feeds.dev/api/v2'
  FEED_API_URL = name ? `https://posts.${name}/api/v2` : 'https://posts.api.feeds.dev/api/v2'
  USERS_SEARCH_API_URL = name ? `https://users.${name}/api/v3` : 'https://users.api.feeds.dev/api/v3'
}