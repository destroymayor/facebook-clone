import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const Title = styled.div`
  color: rgb(167, 170, 175);
  margin-bottom: 10px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  margin: 10px 0;
`;

export const ListItemImage = styled.div`
  flex: 1;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background-color: #ccc;
`;

export const ListItemDescription = styled.div`
  padding-left: 10px;
  flex: 1.5;
`;

export const ListItemTitle = styled.div`
  color: #ffffff;
`;

export const ListItemLink = styled.div`
  padding-top: 5px;
  font-size: 12px;
  color: #cccccc;
`;

export const DiverLine = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 10px;
  background-color: #65676b;
`;
