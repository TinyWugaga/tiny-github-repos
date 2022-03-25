import styled from "styled-components";

import Head from "./Head";
import Header from "./Header";

import { mediaDesktopMixin, mediaMobileMixin } from "@/styles/utils/device";

const Container = styled.div`
  position: relative;
`;
const Main = styled.main`
  max-width: 1280px;
  height: 100%;

  margin-top: 36vh;
  margin-right: auto;
  margin-left: auto;

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
      <Main>
        <MainContainer>
          {children}
        </MainContainer>
      </Main>
    </Container>
  );
};

export default EmptyLayout;
