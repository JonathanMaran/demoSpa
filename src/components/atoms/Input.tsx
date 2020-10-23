import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';

interface Props {
  value: string;
  handleChange: (arg: string) => void;
  width?: string | number;
  label?: string
};

const Input: React.FC<Props> = props => {

  function onHandleChange(event: React.FormEvent<HTMLInputElement>) {
    const { currentTarget: { value } } = event;
    handleChange(value);
  }

  const { value, handleChange, width = 300, label } = props;

  return (
    <Container>
      <label>{label}</label>
      <input
        value={value}
        onChange={onHandleChange}
        style={{
          width,
          marginTop: 10,
          height: '50px',
          border: '1 grey solid',
          borderRadius: 10
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export default Input;