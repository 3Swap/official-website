import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  outline: none;
  padding: 13px;
  width: 100%;
  border: none;
  color: var(--bg-two);
  border-radius: 5px;
  letter-spacing: 1px;
  font-size: 20px;
  background: #ddd;
`;

const Input = ({ ...children }) => {
  return (
    <>
      <StyledInput {...children} />
    </>
  );
};

export default Input;
