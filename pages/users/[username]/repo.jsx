import { useRouter } from "next/router";

function Repo({ repos }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {
        repos.map(repo => (<p>{repo.name}</p>))
      }
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  const response = await fetch(`http://localhost:3000/api/usernames`)
  const { usernames } = await response.json()
  const paths = (usernames || []).map(username => {
    return {
      params: { username }
    }
  })

  return {
    paths,
    fallback: true
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const response = await fetch(`https://api.github.com/users/${params.username}/repos`);
  const repos = await response.json();

  return {
    props: { repos },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1
  };
}

export default Repo
