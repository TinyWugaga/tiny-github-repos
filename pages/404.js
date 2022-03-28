import { ErrorLayout } from '@/components/Layout';

function ErrorPage(props) {
  return (
    <ErrorLayout {...props}/>
  );
}

export async function getStaticProps() {
  return {
    props: {}
  };
}

export default ErrorPage;
