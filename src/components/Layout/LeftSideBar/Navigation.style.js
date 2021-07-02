import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 15px 0 0 0;
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.2s ease-out;
  cursor: pointer;
  color: #ffffff;

  :hover {
    background-color: rgb(51, 52, 53);
  }
`;

export const ListItemIcon = styled.img`
  border-radius: 50%;
`;

export const ListItemTitle = styled.div`
  padding-left: 20px;
`;

export const DiverLine = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 10px;
  background-color: #65676b;
`;
