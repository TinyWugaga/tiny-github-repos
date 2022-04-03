import { useMemo } from "react";
import { useRouter } from "next/router";

import handleError, { getErrorLayout } from "@/lib/api/handleError";
import { fetchProfile } from "@/lib/hook/useUserProfile";

import useUserProfile from "@/lib/hook/useUserProfile";
import useUserRepoArticle from "@/lib/hook/useUserRepoArticle";

import { EmptyLayout, ProfileLayout } from "@/components/Layout";
import { CardPaper, CardHeader, CardContent } from "@/components/Card";
import LoadingContent from "@/components/Layout/LoadingContent";
import EmptyRepoArticle from "@/components/RepoArticle/EmptyRepoArticle";
import RepoArticle from "@/components/RepoArticle";

function Repo({ title, username, repo, error, ...props }) {
  const isProfileError = getErrorLayout(error);
  const router = useRouter();

  const {
    article,
    isEmpty,
    isLoading,
    isError: repoError
  } = useUserRepoArticle(username, repo);

  const ErrorHandler = useMemo(() => isProfileError || repoError, [
    isProfileError,
    repoError
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
      isLoading={isLoading}
      {...props}
    >
      {isEmpty ? (
        <EmptyRepoArticle />
      ) : (
        <CardPaper>
          <CardHeader>{article.name}</CardHeader>
          <CardContent>
            <RepoArticle article={article} />
          </CardContent>
        </CardPaper>
      )}
    </ProfileLayout>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          username: "Tinywugaga",
          repo: "108WebProgramming-php"
        }
      }
    ],
    fallback: true
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const { username, repo } = params;

  try {
    const { profile, error } = await fetchProfile(username);

    return {
      props: {
        username,
        repo,
        profile,
        error
      }
    };
  } catch (error) {
    const getError = handleError(error.message)
    return {
      props: {
        username,
        repo,
        error: getError
      }
    };
  }
}

export default Repo;
