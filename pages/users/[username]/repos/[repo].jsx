import { useMemo } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

import useUserProfile from "@/lib/hook/useUserProfile";
import useUserRepoArticle from "@/lib/hook/useUserRepoArticle";

import { EmptyLayout, ProfileLayout } from "@/components/Layout";
import { CardPaper, CardHeader, CardContent } from "@/components/Card";
import LoadingContent from "@/components/Layout/LoadingContent";
import EmptyRepoArticle from "@/components/RepoArticle/EmptyRepoArticle";
import RepoArticle from "@/components/RepoArticle";

function Repo({ title, username, repo, ...props }) {
  const router = useRouter();

  const { profile, isError: isProfileError } = useUserProfile(username);
  const {
    article,
    isEmpty,
    isLoading,
    isError: isRepoError
  } = useUserRepoArticle(username, repo);

  const ErrorHandler = useMemo(() => isProfileError || isRepoError, [
    isProfileError,
    isRepoError
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
  return {
    props: {
      username: params.username,
      repo: params.repo
    }
  };
}

export default Repo;
