import styled from "styled-components";

const CardHeadContainer = styled.div`
  position: relative;

  display: flex;
`;

const CardHeadIcon = styled.div`
  flex: 1 1 15%;
`;

const CardHeadTitle = styled.div`
  flex: 3 2 70%;
  margin-left: auto;
`;

function CardHead({ children, ...props }) {
  const { icon, title } = props;
  return (
    <CardHeadContainer>
      {children}
      <CardHeadIcon>{icon}</CardHeadIcon>
      <CardHeadTitle>{title}</CardHeadTitle>
    </CardHeadContainer>
  );
}

export default CardHead;
