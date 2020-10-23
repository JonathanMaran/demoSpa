import React from 'react';
import styled from 'styled-components';

interface Props {};

const Header: React.FC<Props> = props => {
  return (
    <Container>
      <h1>Campus Messaging</h1>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default Header;