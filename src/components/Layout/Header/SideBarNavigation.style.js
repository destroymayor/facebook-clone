import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const UserItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px 10px 5px 5px;
  margin: 0 5px 0 15px;
  border-radius: 50px;
  transition: all 0.2s ease-out;

  :hover {
    background-color: rgb(105, 105, 105);
  }
`;

export const UserImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50px;
`;

export const UserName = styled.div`
  padding-left: 10px;
`;

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 2px;
  margin: 0 5px;
  border-radius: 50px;
  transition: all 0.2s ease-out;
  background-color: rgb(51, 52, 53);

  :hover {
    background-color: rgb(105, 105, 105);
  }
`;

export const ListItemIcon = styled.div`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  font-size: 1.5em;
  border-radius: 50px;
  fill: #ffffff;
`;

export const ListItemText = styled.span`
  padding: 0 10px;
`;
