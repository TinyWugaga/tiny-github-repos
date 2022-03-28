import { getUserRepoAPI } from '@/lib/api/fetcher';
import { getRepoArticle } from '@/lib/hook/useUserRepoArticle';
import handleError from '@/lib/api/handleError'

export default async function handler(req, res) {
  const { username, repo } = req.query;

  try {
    const userRepo = await getUserRepoAPI(username, repo);

    if(userRepo?.message) throw new Error(userRepo.message)

    const article = getRepoArticle(userRepo)
    res.status(200).json(article);
  } catch (err) {
    const error = handleError(!username ? 'Require username' : err.message)
    res.status(500).json({ error });
  }
}
