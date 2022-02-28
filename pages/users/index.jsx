import { useRouter } from "next/router";

import { CardPaper, CardHead, CardContent } from "@/components/Card";
import List from "@/components/List";

function Users({ usernames }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const data = usernames.map(username =>({
    title: username,
    link: `/users/${username}/repos`,
  }))

  return (
    <div>
      <CardPaper variant="round">
        <CardHead title="Users" />
        <CardContent>
          <List data={data} />
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
