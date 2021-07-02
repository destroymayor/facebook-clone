import Navigation from '@/components/Layout/LeftSideBar/Navigation';
import Shortcuts from '@/components/Layout/LeftSideBar/Shortcuts';
import PrivacyTerms from '@/components/Layout/LeftSideBar/PrivacyTerms';

import { Container, Header, Footer } from '@/components/Layout/LeftSideBar/LeftSideBar.style';

const LeftSideBar = () => (
  <Container>
    <Header>
      <Navigation />
      <Shortcuts />
    </Header>
    <Footer>
      <PrivacyTerms />
    </Footer>
  </Container>
);

export default LeftSideBar;
