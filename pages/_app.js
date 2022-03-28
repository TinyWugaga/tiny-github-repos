import { SWRConfig } from 'swr';
import { ThemeProvider } from 'styled-components';

import fetcher from '@/lib/api/fetcher';

import theme from '@/styles/theme';
import GlobalCSS from '@/styles/global';

function MyApp({
  Component,
  pageProps,
  fallback
}) {
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
