import { useRouter } from 'next/router';

import { BasicLayout } from "@/components/Layout";
import GirdBox from "@/components/GirdBox";

function Users({ usernames }) {
  const router = useRouter();

  const data = router.isFallback
    ? [
        {
          title: 'isLoading...'
        }
      ]
    : usernames.map(username => ({
        title: username,
        link: `/users/${username}/repos`
      }));

  data.push({title: 'Test', link: '/testpage'})

  return (
    <BasicLayout variant="round">
      <GirdBox data={data} />
    </BasicLayout>
  );
}

export async function getStaticProps() {
  const response = await fetch(`http://localhost:3000/api/usernames`);
  const { usernames } = await response.json();

  return {
    props: { usernames }
  };
}

export default Users;
