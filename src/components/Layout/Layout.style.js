import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
`;

const asideContainer = styled.div`
  height: calc(100vh - 56px);
  position: sticky;
  top: 57px;
  background-color: rgb(23, 24, 25);
`;

export const LeftSideBarContainer = styled(asideContainer)`
  flex-basis: 360px;
`;

export const Main = styled.div`
  flex: 1;
  background-color: #96b1da;
  height: 2000px;
`;

export const RightSideBarContainer = styled(asideContainer)`
  flex-basis: 280px;
`;
