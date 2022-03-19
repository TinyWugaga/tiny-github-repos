import styled from "styled-components";

const Container = styled.div`
  grid-column: 2 / span 2;
  min-width: 0;

  @media (max-width: 767.98px) {
    &.main_block {
      grid-row: 2 / span 2;
    }
  }
`;

const Main = ({ className, children }) => {
  return <Container className={className}>{children}</Container>;
};

export default Main;
