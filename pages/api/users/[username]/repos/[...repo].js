import { getUserReposAPI } from '@/lib/api/fetcher';
import { getRepoList } from '@/lib/hook/useUserRepoList';
import handleError from '@/lib/api/handleError'

export default async function handler(req, res) {
  const { username, repo } = req.query;
  const [ pageSize, page = 1 ] = repo

  try {
    const repos = await getUserReposAPI(username, {
      pageSize,
      page
    });

    if(repos?.message) throw new Error(repos.message)

    const repoList = getRepoList(repos)
    res.status(200).json(repoList);

  } catch (err) {
    const error = handleError(!username ? 'Require username' : err.message)
    res.status(500).json({ error });
  }
}
