import Header from '@/components/Layout/Header/Header';
import LeftSideBarPage from '@/components/Layout/LeftSideBar/LeftSideBar';
import RightSideBarPage from '@/components/Layout/RightSideBar/RightSideBar';

import {
  Container,
  Content,
  LeftSideBarContainer,
  Main,
  RightSideBarContainer,
} from '@/components/Layout/Layout.style';

const Layout = (props) => {
  const { children } = props;
  return (
    <Container>
      <Header />
      <Content>
        <LeftSideBarContainer>
          <LeftSideBarPage />
        </LeftSideBarContainer>

        <Main>{children}</Main>

        <RightSideBarContainer>
          <RightSideBarPage />
        </RightSideBarContainer>
      </Content>
    </Container>
  );
};

export default Layout;
