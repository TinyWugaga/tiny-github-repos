import { useRouter } from "next/router";
import useSWR from "swr";

import { ProfileLayout } from "@/components/Layout";
import { CardPaper, CardHeader, CardContent } from "@/components/Card";
import RepoArticle from "@/components/RepoArticle";

function Repo({ title, username, repo, ...props }) {
  const router = useRouter();

  const { data: repoData, error: repoError } = useSWR(
    !router.isFallback
      ? `https://api.github.com/repos/${username}/${repo}`
      : null
  );

  const { data: ownerData, error: ownerError } = useSWR(
    username ? `https://api.github.com/users/${username}` : null
  );

  if (repoError || ownerError) return "An error has occurred.";

  const { login, name, avatar_url, html_url } = ownerData || {};

  return (
    <ProfileLayout
      title={title}
      profile={{
        image: avatar_url,
        name: name || login,
        link: html_url
      }}
      {...props}
    >
      {repoData && (
        <CardPaper>
          <CardHeader>{repoData.full_name}</CardHeader>
          <CardContent>
            <RepoArticle repo={repoData} />
          </CardContent>
        </CardPaper>
      )}
    </ProfileLayout>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  return {
    props: {
      username: params.username,
      repo: params.repo
    },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1
  };
}

export default Repo;
