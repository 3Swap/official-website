import React from 'react';
import {
  Navcontent,
  NavWrapper,
} from '../styles/herosection/HeroSection.styled';
import { Column, Container, Row } from '../utility/GlobalStyle';

const Navbar = () => {
  return (
    <>
      <NavWrapper>
        <Container>
          <Navcontent>
            <Row>
              <Column>Logo</Column>
              <Column>Navlinks</Column>
            </Row>
          </Navcontent>
        </Container>
      </NavWrapper>
    </>
  );
};

export default Navbar;
