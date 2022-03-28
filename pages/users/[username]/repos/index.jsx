import { useMemo } from "react";
import { useRouter } from "next/router";

import useUserProfile from "@/lib/hook/useUserProfile";
import useUserRepoList from "@/lib/hook/useUserRepoList";
import useWindowScroll from "@/lib/hook/useWindowScroll";

import { EmptyLayout, ProfileLayout } from "@/components/Layout";
import LoadingContent from "@/components/Layout/LoadingContent";
import EmptyRepoArticle from "@/components/RepoArticle/EmptyRepoArticle";
import List from "@/components/List";

function Repos({ title, username, ...props }) {
  const router = useRouter();

  const {
    repoList,
    handleLoadMoreRepo,
    isEmpty,
    isError: isRepoListError,
    isReachingEnd,
    isRefreshing,
    isLoadingInitialData
  } = useUserRepoList(username);

  const { profile, isError: isProfileError } = useUserProfile(username);

  useWindowScroll(
    () => handleLoadMoreRepo()
  );

  const ErrorHandler = useMemo(() => isProfileError || isRepoListError, [
    isProfileError,
    isRepoListError
  ]);

  if (ErrorHandler) return ErrorHandler;

  return router.isFallback ? (
    <EmptyLayout title={title}>
      <LoadingContent />
    </EmptyLayout>
  ) : (
    <ProfileLayout title={title} profile={profile} isLoading={isLoadingInitialData} {...props}>
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
  return {
    props: {
      username: params.username
    }
  };
}

export default Repos;
