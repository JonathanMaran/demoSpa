import React from 'react';
import styled from 'styled-components';

interface Props {};

const Footer: React.FC<Props> = props => {
  return (
    <Container>
      <p>Envoyez vos dons: paypal</p>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 20px;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default Footer;