import styled from "styled-components";

import Head from "./Head";
import Footer from "./Footer";

import { mediaDesktopMixin, mediaMobileMixin } from "@/styles/utils/device";

const Container = styled.div`
  position: relative;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

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

  margin-right: auto;
  margin-left: auto;

  display: flex;
  justify-content: center;

  padding: 0 32px;

  ${mediaDesktopMixin.L(`
    max-width: 1440px;
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
    <Container>
      <Head title={title} />
      <Main className="main">
        <MainContainer>{children}</MainContainer>
      </Main>
      <Footer className="footer"/>
    </Container>
  );
};

export default EmptyLayout;
