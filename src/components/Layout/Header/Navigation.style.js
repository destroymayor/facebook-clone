import styled from 'styled-components';

export const Container = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  flex: 1;
  position: relative;
  margin: 0 5px;
  padding: 8px 40px;
  transition: all 0.2s ease-in;
  cursor: pointer;

  :hover {
    border-radius: ${(props) => (props.selected ? '0' : '5')}px;
    background-color: ${(props) => (props.selected ? 'rgba(0, 0, 0, 0)' : 'rgb(51,52,53)')};
  }
`;

export const ListItemIcon = styled.span`
  color: #ccc;
  fill: ${(props) => (props.selected ? '#1877F2' : '#ccc')};
`;

export const ListItemDiverLine = styled.span`
  width: 100%;
  height: 5px;
  position: absolute;
  bottom: -5px;
  left: 0;
  background-color: #1877f2;
`;
