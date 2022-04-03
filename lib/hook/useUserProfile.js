import { useMemo } from 'react';
import useSWR from 'swr';

import fetcher from '@/lib/api/fetcher';

export const profileAPI = '/api/profile/';

export const getUserProfile = data => {
  if (!data) return {};
  const { login, name, avatar_url, html_url } = data;
  return {
    login,
    name,
    image: avatar_url,
    link: html_url
  };
};

export const fetchProfile = async username => {
  try {
    const data = await fetcher(
      `${process.env.BACKEND_DOMAIN}${profileAPI.slice(1)}${username}`
    );
    return {
      profile: data,
      error: data?.error || null
    };
  } catch (error) {
    throw error;
  }
};

function useUserProfile(username) {
  const { data, error: profileError } = useSWR(
    username ? `${profileAPI}${username}` : null
  );

  const isEmpty = useMemo(() => data && Object.values(data).length === 0, [
    data
  ]);

  const isError = useMemo(() => {
    const error = profileError || data?.error;
    return error && getErrorLayout(error);
  }, [profileError, data]);

  return {
    profile: data,
    isLoading: !profileError && !data,
    isEmpty,
    isError
  };
}

export default useUserProfile;
