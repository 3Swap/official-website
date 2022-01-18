import React from 'react';
import { ListBoxWrapper, Overlay } from '../../styles/swap/Swap.styled';

const TokenSelector = ({ open, children }) => {
  return (
    <>
      {open && (
        <Overlay>
          <ListBoxWrapper>{children}</ListBoxWrapper>
        </Overlay>
      )}
    </>
  );
};

export default TokenSelector;
