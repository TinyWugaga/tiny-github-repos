import styled from "styled-components";

import { darkenColor, lightenColor } from "@/styles/utils/colorInput";

const CardHeaderContainer = styled.div`
  position: relative;

  padding: 12px;
  margin: -1px -1px 0;
  background-color: ${({ theme }) => lightenColor(theme.palette.background, 5)};
  border-color: ${({ theme }) => darkenColor(theme.palette.gray, 10)};
  border-style: solid;
  border-width: 1px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

const CardHeaderTitle = styled.h3`
  display: flex;

  align-items: center;
  flex-wrap: wrap;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;
const CardHeaderTitleIcon = styled.div`
  flex-shrink: 0;
  margin: -4px;
`;
const CardHeaderTitleText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-weight: 600;
  color: ${({ theme }) => theme.typography.color.light};
`;

function CardHeader({ children, ...props }) {
  const { icon } = props;
  return (
    <CardHeaderContainer>
      <CardHeaderTitle>
        {icon && <CardHeaderTitleIcon>{icon}</CardHeaderTitleIcon>}
        <CardHeaderTitleText>{children}</CardHeaderTitleText>
      </CardHeaderTitle>
    </CardHeaderContainer>
  );
}

export default CardHeader;
