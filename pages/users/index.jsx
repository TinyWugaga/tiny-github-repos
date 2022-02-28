import { useRouter } from "next/router";
import Link from "next/link";

import { CardPaper, CardHead, CardContent } from "@/components/Card";

function Users({ usernames }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CardPaper variant="round">
        <CardHead title="Users" />
        <CardContent>
          {(usernames || []).map((username, index) => (
            <div key={index}>
              <Link href={`/users/${username}/repo`}>
                <a>{username}</a>
              </Link>
            </div>
          ))}
        </CardContent>
      </CardPaper>
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
