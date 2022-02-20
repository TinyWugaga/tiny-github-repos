import { useRouter } from "next/router";
import Link from "next/link";

function Users({ usernames }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {(usernames || []).map(username => (
        <div>
          <Link href={`/users/${username}/repo`}>
            <a>{username}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(`http://localhost:3000/api/usernames`);
  const { usernames } = await response.json();

  return {
    props: { usernames },
    revalidate: 1
  };
}

export default Users;
