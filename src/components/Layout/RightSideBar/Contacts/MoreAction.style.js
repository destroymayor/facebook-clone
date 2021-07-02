import styled from 'styled-components';

export const Container = styled.div``;

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  margin: 0 10px;
  cursor: pointer;
  font-size: 17px;
  color: rgb(167, 170, 175);
  border-radius: 50%;
  transition: all 0.2s ease-out;

  :hover {
    background-color: rgb(105, 105, 105);
  }
`;
