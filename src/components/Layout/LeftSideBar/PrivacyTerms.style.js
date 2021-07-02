import styled from 'styled-components';

export const Container = styled.div``;

export const List = styled.ul`
  width: 250px;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 10px 0;
  list-style-type: none;
  line-height: 1.3;
`;

export const ListItem = styled.li`
  font-size: 0.8em;
  color: #b0b3b8;

  cursor: pointer;

  span {
    padding: 0 5px;
  }

  :last-child {
    span {
      display: none;
    }
  }
`;

export const ListItemLink = styled.a`
  :hover {
    text-decoration: underline;
  }
`;
