import styled from "styled-components";

import Head from "./Head";
import Footer from "./Footer";

import { mediaDesktopMixin, mediaMobileMixin } from "@/styles/utils/device";

const LayoutContainer = styled.div`
  position: relative;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  .main {
    min-height: calc(100vh - 220px);

    ${mediaMobileMixin.L(`
      min-height: calc(100vh - 200px);
    `)}
  }
  .footer {
    min-height: 64px;
  }
`;
const Main = styled.main`
  max-width: 1280px;
  width: 100%;
  height: auto;

  margin-top: 12vh;
  margin-right: auto;
  margin-left: auto;

  display: flex;
  justify-content: center;

  padding: 0 32px;

  ${mediaDesktopMixin.L(`
    max-width: 1440px;
  `)}

  ${mediaDesktopMixin.XL(`
    max-width: 1920px;
  `)}

  ${mediaMobileMixin.L(`
    margin-top: 64px;
  `)}
`;

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  gap: 16px;
`;

const EmptyLayout = ({ children, title }) => {
  return (
    <LayoutContainer>
      <Head title={title} />
      <Main className="main">
        <MainContainer>{children}</MainContainer>
      </Main>
      <Footer className="footer" />
    </LayoutContainer>
  );
};

export default EmptyLayout;
