import { SWRConfig } from 'swr';
import { ThemeProvider } from 'styled-components';

import theme from '@/styles/theme';
import GlobalCSS from '@/styles/global';

const fetcher = (resource, init) =>
  fetch(resource, init).then(res => res.json());

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <ThemeProvider theme={theme}>
        <GlobalCSS />
        <Component title="Dcard 2022 Intern Homework" {...pageProps}/>
      </ThemeProvider>
    </SWRConfig>
  );
}

export default MyApp;
