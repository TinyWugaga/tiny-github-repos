import styled from "styled-components";

const CardHeadContainer = styled.div`
  position: relative;
  padding: 1rem;

  display: flex;
`;

const CardHeadIcon = styled.div`
  flex: 1 1 15%;
  margin-right: 1.2rem;
`;

const CardHeadTitle = styled.div`
  flex: 3 2 70%;
  margin-right: auto;

  span {
    font-family: Monaco;
    font-size: 2.5rem;
    line-height: 1.6;

    display: flex;
    align-items: center;

    color: #ffffff;
  }
`;

function CardHead({ children, ...props }) {
  const { icon } = props;
  return (
    <CardHeadContainer>
      {icon && <CardHeadIcon>{icon}</CardHeadIcon>}
      <CardHeadTitle>
        <span>{children}</span>
      </CardHeadTitle>
    </CardHeadContainer>
  );
}

export default CardHead;
