import React from 'react';
import Image from './Image';
import { Logo } from '../assets';
import { FaBars } from '../utility';

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
import { Column, Container, NavLink, Row } from '../utility/GlobalStyle';
import Button from './Button';

const Navbar = ({ toggle }) => {
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
                  <NavLink to="/connect">
                    <Button
                      bgColor="var(--bg-two)"
                      textColor="var(--text-color)"
                      hoverBg="var(--text-color)"
                      hoverColor="var(--bg-one)"
                      label="Connect Wallet"
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
