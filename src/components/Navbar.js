import React from 'react';
import Image from './Image';
import { Logo } from '../assets';
import { FaBars } from '../utility';
import { ConnectWallet } from '../utility/function';
import {
  MobileIcon,
  NavBtn,
  Navcontent,
  NavItem,
  NavLinks,
  NavMenu,
  NavWrapper,
} from '../styles/navbar/Navbar.styled';
import { NavLinks as Navigation } from '../data/Navlink.data';
import { Column, Container, Row } from '../utility/GlobalStyle';
import Button from './Button';

const Navbar = ({ toggle }) => {
  return (
    <>
      <NavWrapper>
        <Container>
          <Navcontent>
            <Row>
              <Column flex="0.2">
                <Image img={Logo} />
              </Column>
              <Column flex="0.8">
                <MobileIcon onClick={toggle}>
                  <FaBars className="icon" />
                </MobileIcon>
                <NavMenu>
                  {Navigation.map(({ label, path }, i) => (
                    <NavItem key={i}>
                      <NavLinks
                        to={path}
                        smooth={true}
                        duration={300}
                        spy={true}
                        exact="true"
                      >
                        {label}
                      </NavLinks>
                    </NavItem>
                  ))}
                </NavMenu>
                <NavBtn>
                  <Button
                    bgColor="var(--bg-two)"
                    textColor="var(--text-color)"
                    hoverBg="var(--text-color)"
                    hoverColor="var(--bg-one)"
                    label="Connect Wallet"
                    onClick={ConnectWallet}
                  />
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
