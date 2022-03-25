import { useMemo } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";

import useWindowScroll from "@/lib/hook/useWindowScroll";
import { ProfileLayout } from "@/components/Layout";
import List from "@/components/List";

const PAGE_SIZE = 10;
function Repos({ title, username, ...props }) {
  const router = useRouter();

  const { data, error, size, setSize, isValidating } = useSWRInfinite(index =>
    !(isReachingEnd || isRefreshing)
      ? `https://api.github.com/users/${username}/repos?per_page=${PAGE_SIZE}&page=${index +
          1}`
      : null
  );

  const { data: ownerData, error: ownerError } = useSWR(
    username ? `https://api.github.com/users/${username}` : null
  );

  useWindowScroll(() => isReachingEnd || setSize(size + 1));

  const repoData = useMemo(() => {
    const repos = data ? [].concat(...data) : [];
    return repos.map(repo => ({
      title: repo.name,
      subtitle: repo.description,
      attachment: repo.stargazers_count,
      link: `/users/${username}/repos/${repo.name}`
    }));
  }, [username, data]);

  if (error || ownerError) return "An error has occurred.";

  const isEmpty = data?.[0]?.length === 0;

  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  const isRefreshing = isValidating && data && data.length === size;

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
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
        <>
          {isEmpty ? (
            <div>Not Found Repo</div>
          ) : (
            <List data={repoData} isRefreshing={isRefreshing} />
          )}
        </>
      )}
    </ProfileLayout>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  return {
    props: { username: params.username },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 10 * 60
  };
}

export default Repos;
