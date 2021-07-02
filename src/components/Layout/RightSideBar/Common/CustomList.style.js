import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 10px 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  color: rgb(167, 170, 175);

  :hover {
    background-color: rgb(105, 105, 105);
  }
`;

export const ListItemImage = styled.div`
  width: 40px;
  height: 40px;
  background-color: #cc0;
  border-radius: 50%;
`;

export const ListItemName = styled.div`
  margin-left: 10px;
`;
