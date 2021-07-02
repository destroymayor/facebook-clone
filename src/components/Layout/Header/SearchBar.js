import { FacebookIcon } from '@/components/common/Icons';

import {
  Container,
  Logo,
  SearchInputContainer,
  SearchInputIcon,
  SearchInput,
} from '@/components/Layout/Header/SearchBar.style';

const SearchBar = () => (
  <Container>
    <Logo>
      <FacebookIcon />
    </Logo>
    <SearchInputContainer>
      <SearchInputIcon>
        <i className="fas fa-search" />
      </SearchInputIcon>
      <SearchInput placeholder="Search Facebook" />
    </SearchInputContainer>
  </Container>
);

export default SearchBar;
