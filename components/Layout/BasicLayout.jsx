import styled from "styled-components";

import Head from "./Head";
import Header from "./Header";

import { mediaDesktopMixin, mediaMobileMixin } from "@/styles/utils/device";

const Container = styled.div`
  position: relative;
`;
const Main = styled.main`
  margin-top: 48px;

  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;

  padding: 0 32px;

  ${mediaDesktopMixin.L(`
    max-width: 1440px;
  `)}
`;

const MainContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 0 minmax(
      0,
      calc(100% - 310px)
    );
  grid-gap: 24px;

  ${mediaMobileMixin.L(`
    grid-auto-flow: row;
    grid-template-columns: 1fr !important;

    >[class*="main_block"] {
      grid-row: 1;

      width: 100%;
      grid-column: 1;
    }
  `)}
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
