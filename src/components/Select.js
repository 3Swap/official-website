import React, { useState } from 'react';
import { Fade, Menu, MenuItem } from '@mui/material';

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
      <MenuItem
        key={token.symbol}
        onClick={() => handleSelected(token)}
        className="MenuItem"
        style={{ padding: '10px 0px 10px 30px' }}
      >
        <img
          src={token.logoURI}
          style={{ width: '20px', height: '20px', marginRight: '10px' }}
          alt="img"
          width="10px"
          height="10px"
        />
        <span className="MenuList" style={{ fontWeight: 'bold' }}>
          {token.symbol}
        </span>
      </MenuItem>
    );
  }

  //   console.log(selectedToken);
  return (
    <>
      <div onClick={openMenu} className="MenuBox">
        <span className="MenuImg"> {selectedTokenImg ? <img src={selectedTokenImg} alt="img" /> : null}</span>{' '}
        <span className="MenuLabel">
          {selectedToken ? selectedToken : <span className="defualt">select token</span>}
        </span>
      </div>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        TransitionComponent={Fade}
        keepMounted
        className="menux"
      >
        {items}
      </Menu>
    </>
  );
};

export default Test;
