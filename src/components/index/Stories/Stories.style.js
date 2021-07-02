import styled from 'styled-components';

export const Container = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 110px;
  height: 200px;
  margin: 10px;
  border-radius: 15px;
  background-color: #ccc;
`;

export const ListItemImage = styled.div`
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  margin: 15px;
  border-radius: 50%;
  border: 3px solid #668cbe;
`;

export const ListItemName = styled.span`
  margin: 15px;
`;
