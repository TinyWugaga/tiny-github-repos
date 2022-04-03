import { useMemo } from "react";
import { useRouter } from "next/router";

import handleError, { getErrorLayout } from "@/lib/api/handleError";
import { fetchProfile } from "@/lib/hook/useUserProfile";

import useUserRepoList from "@/lib/hook/useUserRepoList";
import useWindowScroll from "@/lib/hook/useWindowScroll";

import { EmptyLayout, ProfileLayout } from "@/components/Layout";
import LoadingContent from "@/components/Layout/LoadingContent";
import EmptyRepoArticle from "@/components/RepoArticle/EmptyRepoArticle";
import List from "@/components/List";

function Repos({ title, username, profile, error, ...props }) {
  const isProfileError = getErrorLayout(error);
  const router = useRouter();

  const {
    repoList,
    handleLoadMoreRepo,
    isEmpty,
    isError: repoListError,
    isReachingEnd,
    isRefreshing,
    isLoadingInitialData
  } = useUserRepoList(username);

  useWindowScroll(() => handleLoadMoreRepo());

  const ErrorHandler = useMemo(() => isProfileError || repoListError, [
    isProfileError,
    repoListError
  ]);

  if (ErrorHandler) return ErrorHandler;

  return router.isFallback ? (
    <EmptyLayout title={title}>
      <LoadingContent />
    </EmptyLayout>
  ) : (
    <ProfileLayout
      title={title}
      profile={profile}
      isLoading={isLoadingInitialData}
      {...props}
    >
      {isEmpty ? <EmptyRepoArticle /> : <List data={repoList} />}
    </ProfileLayout>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          username: "Tinywugaga"
        }
      }
    ],
    fallback: true
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const { username } = params;

  try {
    const { profile, error } = await fetchProfile(username);

    return {
      props: {
        username,
        profile,
        error
      }
    };
  } catch (error) {
    const getError = handleError(error.message)
    return {
      props: {
        username,
        error: getError
      }
    };
  }
}

export default Repos;
