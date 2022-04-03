import styled from "styled-components";

import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";

import { mediaDesktopMixin, mediaMobileMixin } from "@/styles/utils/device";

const LayoutContainer = styled.div`
  position: relative;
  height: 100vh;

  .main {
    min-height: calc(100% - 248px);
  }
  .footer {
    min-height: 64px;
  }
`;
const Main = styled.main`
  max-width: 1280px;
  height: auto;

  margin-top: 36px;
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
  `)}
`;

const BasicLayout = ({ children, title }) => {
  return (
    <LayoutContainer>
      <Head title={title} />
      <Header avatar="Dcard" />
      <Main className="main">
        <MainContainer>{children}</MainContainer>
      </Main>
      <Footer className="footer" />
    </LayoutContainer>
  );
};

export default BasicLayout;
