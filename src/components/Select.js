import React, { useState } from 'react';
import { Menu, MenuItem, Slide } from '@mui/material';

const Test = ({ tokens }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedToken, setSelectedToken] = useState();
  const [selectedTokenImg, setSelectedTokenImg] = useState();

  const open = Boolean(anchorEl);

  const openMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelected = token => {
    setAnchorEl(null);
    setSelectedToken(token.symbol);
    setSelectedTokenImg(token.logoURI);
  };
  const items = [];
  for (const address in tokens) {
    let token = tokens[address];
    items.push(
      <MenuItem key={token.symbol} onClick={() => handleSelected(token)}>
        <img src={token.logoURI} alt="img" width="10px" height="10px" />
        {token.symbol}
      </MenuItem>
    );
  }

  //   console.log(selectedToken);
  return (
    <>
      <span onClick={openMenu}>
        {selectedTokenImg ? <img src={selectedTokenImg} alt="img" /> : null}{' '}
        {selectedToken ? selectedToken : 'select coin'}
      </span>
      {items && (
        <Menu
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          TransitionComponent={Slide}
          keepMounted
          PaperProps={{
            style: {
              maxHeight: 100 * 4,
              width: '20ch'
            }
          }}
        >
          {items}
        </Menu>
      )}
    </>
  );
};

export default Test;
