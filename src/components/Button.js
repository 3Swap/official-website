import React from 'react';
import { Button as StyledButton } from '../utility/GlobalStyle';
const Button = ({ label, icon, ...children }) => {
  return (
    <StyledButton {...children}>
      {icon}
      &nbsp;
      {label}
    </StyledButton>
  );
};

export default Button;
