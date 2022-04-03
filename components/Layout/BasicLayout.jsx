import styled from "styled-components";

import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";

import { mediaDesktopMixin, mediaMobileMixin } from "@/styles/utils/device";

const Container = styled.div`
  position: relative;
  height: 100vh;

  .main {
    min-height: 84%;
  }
  .footer {
    min-height: 64px;
  }
`;
const Main = styled.main`
  max-width: 1280px;
  height: auto;

  margin-top: 48px;
  margin-bottom: 48px;
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
  grid-template-columns: auto 0 minmax(0, calc(100% - 310px));
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
      <Main className="main">
        <MainContainer>{children}</MainContainer>
      </Main>
      <Footer className="footer"/>
    </Container>
  );
};

export default BasicLayout;
