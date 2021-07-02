import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled.div`
  display: grid;
  place-items: center;
  margin: 0 10px 0 15px;
  border-radius: 50px;
  font-size: 2.5em;
  cursor: pointer;
`;

export const SearchInputContainer = styled.div`
  width: 240px;
  height: 40px;
  display: flex;
  align-items: center;
  vertical-align: middle;
  background-color: rgb(51, 52, 53);
  border-radius: 50px;
`;

export const SearchInputIcon = styled.span`
  padding: 0 10px 0 15px;
  color: #ccc;
`;

export const SearchInput = styled.input`
  font-size: 1em;
  text-align: left;
  background-color: rgb(51, 52, 53);
  border: 0;
  color: #ccc;

  :focus {
    outline: none;
  }
`;
