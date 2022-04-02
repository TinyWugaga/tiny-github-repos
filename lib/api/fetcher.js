const headers = new Headers();
headers.append('access_token', `${ process.env.GITHUB_TOKEN }`);

const fetcher = (resource, init) =>
  fetch(resource, init).then(res => res.json());

export const getUserAPI = (username) => fetcher(
  `https://api.github.com/users/${username}`, {
    headers
  }
)
export const getUserReposAPI = (
  username, {
    page = 1,
    pageSize = 10
  }) => fetcher(
  `https://api.github.com/users/${username}/repos?per_page=${pageSize}&page=${page}`, {
    headers
  }
)
export const getUserRepoAPI = (
  username,
  repo
) => fetcher(
  `https://api.github.com/repos/${username}/${repo}`, {
    headers
  }
)

export default fetcher
