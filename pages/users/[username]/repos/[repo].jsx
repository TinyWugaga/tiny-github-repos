import { useRouter } from "next/router";
import useSWR from "swr";

import { ProfileLayout } from "@/components/Layout";
import { CardPaper, CardHeader, CardContent } from "@/components/Card";
import RepoArticle from "@/components/RepoArticle";

function Repo({ username, repo, ...props }) {
  const router = useRouter();

  const { data: repoData, error } = useSWR(
    !router.isFallback
      ? `https://api.github.com/repos/${username}/${repo}`
      : null
  );

  if (error) return "An error has occurred.";

  return (
    <ProfileLayout
      profile={{
        image: "https://avatars.githubusercontent.com/u/47549832?v=4",
        name: "Tiny"
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
