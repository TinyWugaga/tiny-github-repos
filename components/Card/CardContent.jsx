import styled from "styled-components";

import { darkenColor } from "@/styles/utils/colorInput";

const CardContentContainer = styled.div`
  display: flex;
  justify-content: space-around;

  position: relative;
  width: 100%;
  height: auto;

  margin-bottom: -1px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;

  padding-right: 32px;
  padding-left: 32px;

  padding-bottom: 32px;

  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => darkenColor(theme.palette.gray, 10)};
`;

const CardContent = ({ children }) => {
  return (
    <CardContentContainer>
      {children}
    </CardContentContainer>
  );
};

export default CardContent;
