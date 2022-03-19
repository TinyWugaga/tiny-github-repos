import styled from "styled-components";

const Container = styled.div`
  width: 296px;
`;

const Sidebar = ({ className, children }) => {
  return (
    <Container className={className}>
      {children}
    </Container>
  );
};

export default Sidebar
