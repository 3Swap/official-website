import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarBtn
} from '../styles/sidebar/Sidebar.styled';
import { Button } from './index';
import { NavLinks } from '../data/Navlink.data';
import { injectedConnector } from '../web3/connectors';

const Sidebar = ({ isOpen, toggle }) => {
  const web3 = useWeb3React();
  const [account, setAccount] = useState('');

  const injectWeb3 = async () => {
    if (!web3.active) {
      await web3.activate(injectedConnector);
    } else {
      web3.deactivate();
    }
  };

  useEffect(() => {
    setAccount(web3.account ? web3.account : '');
  }, [web3.account]);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', accounts => {
        setAccount(accounts[0]);
      });
    }
  }, []);
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {NavLinks.map(({ label, path }, i) => (
            <SidebarLink to={path} onClick={toggle} key={i}>
              {label}
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarBtn to="/" onClick={injectWeb3}>
            <Button
              bgColor="var(--bg-two)"
              textColor="var(--text-color)"
              hoverBg="var(--text-color)"
              hoverColor="var(--bg-one)"
              label={`${
                !!account && account.trim().length > 0
                  ? account.slice(0, 8) + '...' + account.slice(30, account.length)
                  : 'Connect Wallet'
              }`}
            />
          </SidebarBtn>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
