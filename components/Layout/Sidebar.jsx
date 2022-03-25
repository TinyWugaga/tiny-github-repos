import styled from "styled-components";

import { mediaDesktopMixin } from "@/styles/utils/device";

const Container = styled.div`
  width: 296px;

  ${mediaDesktopMixin.M(`
    width: 256px;
  `)}
`;

const Sidebar = ({ className, children }) => {
  return (
    <Container className={className}>
      {children}
    </Container>
  );
};

export default Sidebar
