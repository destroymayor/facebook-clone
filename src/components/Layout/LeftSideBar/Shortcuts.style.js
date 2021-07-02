import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
`;

export const Title = styled.div`
  color: rgb(167, 170, 175);
`;

export const MoreAction = styled.div`
  :hover div {
    visibility: visible;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const MoreActionButton = styled.div`
  visibility: hidden;
  transition: all 0.1s ease-out;
  padding: 10px;
  color: #4599ff;
  cursor: pointer;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
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

export const ListItemIcon = styled.div`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  font-size: 25px;
  border-radius: 10px;
  background-color: rgb(145, 145, 145);
`;

export const ListItemTitle = styled.div`
  padding-left: 20px;
`;
