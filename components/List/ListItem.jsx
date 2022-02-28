import styled from "styled-components";
import Link from "next/link";

const ListItemContainer = styled.div`
  display: flex;
`;

const ListItemImage = styled.div`
  flex: 1 1 15%;
`;

const ListItemTitle = styled.div`
  flex: 3 2 70%;
  margin-right: auto;
`;

const ListItem = ({ image, title, link }) => {
  return (
    <ListItemContainer>
      <ListItemImage image={image} />
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
