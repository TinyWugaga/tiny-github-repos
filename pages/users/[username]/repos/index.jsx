import { useRouter } from "next/router";
import useSWRInfinite from "swr/infinite";

import useWindowScroll from "@/lib/hook/useWindowScroll";
import { ProfileLayout } from "@/components/Layout";
import List from "@/components/List";

const PAGE_SIZE = 10;
function Repos({ username, ...props }) {
  const { data, error, size, setSize, isValidating } = useSWRInfinite(index =>
    !isReachingEnd
      ? `https://api.github.com/users/${username}/repos?per_page=${PAGE_SIZE}&page=${index +
          1}`
      : null
  );

  useWindowScroll(e => {
    const windowBottomY = window.innerHeight + window.scrollY;
    const offsetHeight = e.target.body.offsetHeight;

    if (windowBottomY >= offsetHeight) {
      setSize(size + 1);
    }
  });

  const router = useRouter();

  const repos = data ? [].concat(...data) : [];
  const repoData = repos.map(repo => ({
    title: repo.name,
    subtitle: repo.description,
    attachment: repo.stargazers_count,
    link: `/users/${username}/repos/${repo.name}`
  }));

  const isEmpty = data?.[0]?.length === 0;

  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  const isRefreshing = isValidating && data && data.length === size;

  return (
    <ProfileLayout
      profile={{
        image: "https://avatars.githubusercontent.com/u/47549832?v=4",
        name: "Tiny"
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
    fallback: true
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  return {
    props: { username: params.username },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1
  };
}

export default Repos;
