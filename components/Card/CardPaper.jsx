import styled from "styled-components";

import { isHexColor } from "@/components/utils/colorInput";

const CardPaper = styled.div`
  position: relative;
  width: fit-content;
  height: auto;
  min-width: 540px;
  max-width: 90%;
  max-Height: 792px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  border: 1.6px solid #9F9F9F;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.05);

  ${({ variant }) => {
    switch (variant) {
      case "round":
        return "border-radius: 15px;";
    }
  }}
  background: ${({ bgcolor }) => isHexColor(bgcolor) ? bgcolor : CardPaper.defaultProps.bgcolor};
  color: ${({ color }) => isHexColor(color) ? color : CardPaper.defaultProps.color};
`;

CardPaper.defaultProps = {
  variant: "round",
  bgcolor: "#0D0D0D",
  color: "#FFFFFF",
}

export default CardPaper;
