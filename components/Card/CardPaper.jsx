import styled from "styled-components";

const isHexColor = (hex) => hex?.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/)

const CardPaper = styled.div`
  position: relative;
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
