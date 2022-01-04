import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useDispatch, useSelector } from 'react-redux';
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
import { injectedConnector, networkConnector } from '../web3/connectors';
import { injectedProvider, networkProvider } from '../redux/providersSlice';

const Sidebar = ({ isOpen, toggle }) => {
  const web3 = useWeb3React();
  const [account, setAccount] = useState('');
  const dispatch = useDispatch();
  const { web3provider } = useSelector(state => state.provider);

  const injectWeb3 = async () => {
    if (!web3.active || web3provider === 'NETWORK') {
      await web3.activate(injectedConnector);
      dispatch(injectedProvider());
    } else {
      web3.deactivate();
      await web3.activate(networkConnector);
      dispatch(networkProvider());
    }
  };

  useEffect(() => {
    if (web3.active && web3provider === 'INJECTED') {
      setAccount(web3.account ? web3.account : '');
    } else {
      setAccount('');
    }
  }, [web3.active, web3provider]);

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
