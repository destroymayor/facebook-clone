import SearchBar from '@/components/Layout/Header/SearchBar';
import Navigation from '@/components/Layout/Header/Navigation';
import SideBarNavigation from '@/components/Layout/Header/SideBarNavigation';

import { Container } from '@/components/Layout/Header/Header.style';

const Header = () => (
  <Container>
    <SearchBar />
    <Navigation />
    <SideBarNavigation />
  </Container>
);

export default Header;
