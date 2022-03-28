import { useMemo } from 'react';
import useSWR from 'swr';

import { getErrorLayout } from '@/lib/api/handleError'
import useLanguages from '@/lib/hook/useLanguages';

const reposAPI = username => `/api/users/${username}/`;

export const getRepoArticle = data => {
  if (!data) return {};
  const {
    full_name,
    description,
    stargazers_count,
    forks,
    watchers,
    languages_url,
    html_url
  } = data;

  return {
    name: full_name,
    description,
    stargazers_count,
    forks,
    watchers,
    languages_url,
    link: html_url
  };
};

function useUserRepoArticle(username, repo) {
  const { data, error:repoError } = useSWR(
    username && repo ? `${reposAPI(username)}${repo}` : null
  );

  const languages = useLanguages(data?.languages_url);

  const isEmpty = useMemo(() => !data || Object.values(data).length === 0, [
    data
  ]);

  const isError = useMemo(() => {
    const error = (repoError || data?.error)
    return error && getErrorLayout(error)
  }, [
    repoError,
    data
  ]);

  return {
    article: {
      ...data,
      languages
    },
    isLoading: !repoError && !data,
    isEmpty,
    isError
  };
}

export default useUserRepoArticle;
