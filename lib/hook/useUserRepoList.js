import { useState, useMemo, useCallback } from 'react';
import useSWRInfinite from 'swr/infinite';

import { getErrorLayout } from '@/lib/api/handleError'

const reposAPI = username => `/api/users/${username}/repos/`;
const PAGE_SIZE = 10;

export const getRepoList = data => {
  if (!(data && Object.values(data).length)) return [];
  return data.map(repo => ({
    title: repo.name,
    subtitle: repo.description,
    attachment: repo.stargazers_count,
    link: `/users/${repo.owner.login}/repos/${repo.name}`
  }));
};

function useUserRepoList(username) {
  const { data, error:repoListError, size, setSize, isValidating } = useSWRInfinite(index =>
    username ? `${reposAPI(username)}${PAGE_SIZE}/${index + 1}` : null
  );

  const repoList = useMemo(() => (data ? [].concat(...data) : []), [data]);

  const isLoadingInitialData = useMemo(() => !data && !repoListError, [data, repoListError]);
  const isLoadingMore = useMemo(
    () =>
      isLoadingInitialData ||
      (size > 0 && data && typeof data[size - 1] === 'undefined'),
    [isLoadingInitialData, size, data]
  );

  const isEmpty = useMemo(() => data?.[0]?.length === 0, [data]);
  const isReachingEnd = useMemo(
    () => isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE),
    [isEmpty, data]
  );
  const isRefreshing = useMemo(
    () => isValidating && data && data.length === size,
    [isValidating, data, size]
  );

  const shouldLoad = useMemo(
    () =>
      isLoadingInitialData ||
      (!isReachingEnd && !isRefreshing && !isLoadingMore),
    [isLoadingInitialData, isReachingEnd, isRefreshing, isLoadingMore]
  );

  const handleLoadMoreRepo = useCallback(() => shouldLoad && setSize(size + 1), [
    size, setSize, shouldLoad
  ]);

  const isError = useMemo(() => {
    const error = (repoListError || data?.error)
    return error && getErrorLayout(error)
  }, [
    repoListError,
    data
  ]);

  return {
    repoList,
    handleLoadMoreRepo,
    isError,
    isEmpty,
    isReachingEnd,
    isRefreshing,
    isLoadingInitialData,
    isLoadingMore
  };
}

export default useUserRepoList;
