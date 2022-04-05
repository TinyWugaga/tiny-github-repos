import { useCallback } from 'react';
import { useRouter } from 'next/router';

function useSearchUser() {
  const router = useRouter();

  const sendGAEvent = useCallback((
    eventName = '',
    parameters = {}
  ) => {
    gtag('event', eventName, parameters);
  }, []);

  const searchUserRepo = useCallback(
    username => {
      sendGAEvent('search', {
        search_term: username
      });
      router.push(`/users/${username}/repos`);
    },
    [router, sendGAEvent]
  );

  return { searchUserRepo };
}

export default useSearchUser;
