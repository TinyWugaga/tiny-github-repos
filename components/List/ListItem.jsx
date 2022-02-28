import styled from "styled-components";
import Link from "next/link";

const ListItemContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 8px 16px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    border-bottom: 1.2px solid #9f9f9f;
  }
`;

const ListItemImage = styled.div`
  flex: 1 1 15%;

  margin-right: 1.8rem;
`;

const ListItemTitle = styled.div`
  flex: 3 2 70%;
  margin-right: auto;

  font-family: Monaco;

  font-size: 1.2rem;
  line-height: 1.6;

  color: #ffffff;
`;

const ListItem = ({ image, title, link }) => {
  return (
    <ListItemContainer>
      {image && <ListItemImage image={image} />}
      <ListItemTitle>
        {link ? (
          <Link href={link}>
            <a>{title}</a>
          </Link>
        ) : (
          title
        )}
      </ListItemTitle>
    </ListItemContainer>
  );
};

export default ListItem;
