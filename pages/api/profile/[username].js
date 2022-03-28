import { getUserAPI } from '@/lib/api/fetcher';
import { getUserProfile } from '@/lib/hook/useUserProfile';
import handleError from '@/lib/api/handleError'

export default async function handler(req, res) {
  const { username } = req.query;

  try {
    const user = await getUserAPI(username);

    if(user?.message) throw new Error(user.message)

    const profile = getUserProfile(user)
    res.status(200).json(profile);
  } catch (err) {
    const error = handleError(!username ? 'Require username' : err.message)
    res.status(500).json({ error });
  }
}
