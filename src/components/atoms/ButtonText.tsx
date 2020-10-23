import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  value: string;
  handleClick: () => void
};


const ButtonText: React.FC<Props> = props => {

  const { value, handleClick } = props;


  return (
    <Container
     onClick={handleClick}
    >
      {value}
    </Container>
  );
};

const Container = styled.button`

`;

export default ButtonText;
