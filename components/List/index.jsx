import styled from "styled-components";
import ListItem from "./ListItem";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
`;

const List = ({ data }) => {
  return (
    <ListContainer>
      {data.map((item, index) => {
        const { image, title, link } = item;
        return <ListItem key={index} image={image} title={title} link={link} />;
      })}
    </ListContainer>
  );
};

export default List;
