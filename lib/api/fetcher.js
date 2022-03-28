const fetcher = (resource, init) =>
  fetch(resource, init).then(res => res.json());

export const getUserAPI = (username) => fetcher(
  `https://api.github.com/users/${username}`
)
export const getUserReposAPI = (
  username,
  {
    page = 1,
    pageSize = 10
  }) => fetcher(
  `https://api.github.com/users/${username}/repos?per_page=${pageSize}&page=${page}`
)
export const getUserRepoAPI = (
  username,
  repo
  ) => fetcher(
    `https://api.github.com/repos/${username}/${repo}`
)

export default fetcher
