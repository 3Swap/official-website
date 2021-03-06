import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import Image from './Image';
import { Logo } from '../assets';
import { FaBars } from '../utility';

import { MobileIcon, NavBtn, Navcontent, NavItem, NavLinks, NavMenu, NavWrapper } from '../styles/navbar/Navbar.styled';
import { NavLinks as Navigation } from '../data/Navlink.data';
import { Column, Container, NavLink, Row } from '../utility/GlobalStyle';
import Button from './Button';
import { injectedConnector } from '../web3/connectors';

const Navbar = ({ toggle }) => {
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
    <>
      <NavWrapper>
        <Container>
          <Navcontent>
            <Row className="row">
              <Column flex="0.2">
                <NavLink to="/">
                  <Image img={Logo} />
                </NavLink>
              </Column>
              <Column flex="0.8">
                <MobileIcon onClick={toggle}>
                  <FaBars className="icon" />
                </MobileIcon>
                <NavMenu>
                  <NavLink to="/">Home</NavLink>
                  {Navigation.map(({ label, path }, i) => (
                    <NavItem key={i}>
                      <NavLinks to={path} smooth={true} duration={300} spy={true} exact="true">
                        {label}
                      </NavLinks>
                    </NavItem>
                  ))}
                </NavMenu>
                <NavBtn>
                  <NavLink to="/" onClick={injectWeb3}>
                    <Button
                      bgColor="var(--bg-two)"
                      textColor="var(--text-color)"
                      hoverBg="var(--text-color)"
                      hoverColor="var(--bg-one)"
                      label={`${
                        !!account && account.trim().length > 0
                          ? account.slice(0, 10) + '...' + account.slice(30, account.length)
                          : 'Connect Wallet'
                      }`}
                    />
                  </NavLink>
                </NavBtn>
              </Column>
            </Row>
          </Navcontent>
        </Container>
      </NavWrapper>
    </>
  );
};

export default Navbar;
