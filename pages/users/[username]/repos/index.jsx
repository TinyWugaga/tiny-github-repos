import { useRouter } from "next/router";
import Link from "next/link";
import useSWRInfinite from "swr/infinite";

const fetcher = url => fetch(url).then(res => res.json());
const PAGE_SIZE = 10;

function Repos({ username }) {
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    index =>
      `https://api.github.com/users/${username}/repos?per_page=${PAGE_SIZE}&page=${index +
        1}`,
    fetcher
  );

  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const repos = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  const isRefreshing = isValidating && data && data.length === size;

  return (
    <div>
      {isEmpty && <p>Yay, no issues found.</p>}
      {repos.map(repo => {
        return (
          <p key={repo.id} style={{ margin: "6px 0" }}>
            <Link href={`/users/${username}/repos/${repo.name}`}>
              <a>
                <span>
                  - {repo.name}
                </span>
                <span>
                  - {repo.stargazers_count}
                </span>
              </a>
            </Link>
          </p>
        );
      })}
      {isRefreshing && <p>data loading...</p>}

      <button
        disabled={isLoadingMore || isReachingEnd}
        onClick={() => setSize(size + 1)}
      >
        {isLoadingMore
          ? "loading..."
          : isReachingEnd
          ? "no more issues"
          : "load more"}
      </button>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  const response = await fetch(`http://localhost:3000/api/usernames`);
  const { usernames } = await response.json();
  const paths = (usernames || []).map(username => {
    return {
      params: { username }
    };
  });

  return {
    paths,
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
