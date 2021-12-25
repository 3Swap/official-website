import React from 'react';
import { SectionWrapper } from '../styles/section/Section.styled';
import { Column, Container, Row } from '../utility/GlobalStyle';

const Footer = () => {
  return (
    <SectionWrapper>
      <Container>
        <Row>
          <Column></Column>
          <Column></Column>
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default Footer;
