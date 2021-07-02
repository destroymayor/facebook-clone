import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
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

export const Icon = styled.div`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  font-size: 20px;
  border-radius: 50%;
  background-color: rgb(92, 92, 92);
`;

export const Label = styled.div`
  padding-left: 20px;
`;
