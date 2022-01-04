import React, { useState } from 'react';
import { Fade } from '@mui/material';
import { MenuContainer, StyledMenu, StyledMenuItem } from '../styles/modal/Modal.styled';
import { Container, Heading } from '../utility/GlobalStyle';

const Test = ({ tokenInfo }) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const [selectedToken, setSelectedToken] = useState('');
  const [selectedTokenImg, setSelectedTokenImg] = useState('');

  const open = Boolean(anchorEl);

  const openMenu = () => {
    setAnchorEl(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelected = token => {
    setAnchorEl(null);
    setSelectedToken(token.symbol);
    setSelectedTokenImg(token.logoURI);
  };
  console.log(selectedToken);
  const items = [];

  tokenInfo.map((token, i) =>
    items.push(
      <StyledMenuItem key={i}>
        <>
          <img src={token.logoURI} style={{ width: '20px', height: '20px' }} alt="img" width="10px" height="10px" />
          <MenuContainer onClick={() => handleSelected(token)}>{token.symbol}</MenuContainer>
        </>
      </StyledMenuItem>
    )
  );

  return (
    <>
      <div>
        <div onClick={openMenu} className="MenuBox">
          <span className="MenuImg"> {selectedTokenImg ? <img src={selectedTokenImg} alt="img" /> : null}</span>{' '}
          <span className="MenuLabel">
            {selectedToken ? selectedToken : <span className="defualt">Select Token</span>}
          </span>
        </div>
        <StyledMenu
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          TransitionComponent={Fade}
          keepMounted
          className="menux"
        >
          <Container mxWidth="sm">
            <Heading>Select Token</Heading>
            {items}
          </Container>
        </StyledMenu>
      </div>
    </>
  );
};

export default Test;
