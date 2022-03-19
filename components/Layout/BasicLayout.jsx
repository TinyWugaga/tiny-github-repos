import styled from "styled-components";

import Head from "./Head";
import Header from "./Header";

const Container = styled.div`
  position: relative;
`;
const Main = styled.main`
  margin-top: 48px;

  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;

  padding: 0 32px;
`;

const MainContainer = styled.div`
  --Layout-sidebar-width: 296px;
  --Layout-gutter: 24px;

  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 0 minmax(
      0,
      calc(100% - var(--Layout-sidebar-width) - var(--Layout-gutter))
    );
  grid-gap: var(--Layout-gutter);

  @media (max-width: 767.98px) {
    grid-auto-flow: row;
    grid-template-columns: 1fr !important;

    >[class*="main_block"] {
      grid-row: 1;

      width: 100%;
      grid-column: 1;
    }
  }
`;

const BasicLayout = ({ children, title }) => {
  return (
    <Container>
      <Head title={title} />
      <Header avatar="Dcard" />
      <Main>
        <MainContainer>
          {children}
        </MainContainer>
      </Main>
    </Container>
  );
};

export default BasicLayout;
