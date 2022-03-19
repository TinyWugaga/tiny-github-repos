import styled from "styled-components";
import ListItem from "./ListItem";

const ListContainer = styled.div`
  position: relative;
`;

const List = ({ children, data }) => {
  return (
    <ListContainer>
      {data.map((item, index) => {
        return (
          <ListItem key={index} data={item}>
            {children}
          </ListItem>
        );
      })}
    </ListContainer>
  );
};

export default List;
