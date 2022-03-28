import styled from "styled-components";

import { isHexColor } from "@/styles/utils/colorInput";
import { darkenColor } from "@/styles/utils/colorInput";

const CardPaper = styled.div`
  margin: -1px;

  border-color: ${({ theme }) => darkenColor(theme.palette.gray, 10)};
  border-style: solid;
  border-width: 1px;

  ${({ variant }) => {
    switch (variant) {
      case "round":
        return "border-radius: 6px;";
    }
  }}
  background: ${({ theme, bgcolor }) =>
    isHexColor(bgcolor) ? bgcolor : theme.palette.background};
  color: ${({ theme, color }) =>
    isHexColor(color) ? color : theme.typography.color.light};
`;

CardPaper.defaultProps = {
  variant: "round"
};

export default CardPaper;
