import React from 'react';
import Image from './Image';
import {
  SectionImageWrapper,
  SectionWrapper,
  SectionPadding,
} from '../styles/section/Section.styled';
import { Title } from '../utility';
import { Row, Column, Container, Subheading } from '../utility/GlobalStyle';
import Button from './Button';
import Countdown from './Countdown';

const Section = (props) => {
  return (
    <>
      <SectionWrapper>
        <Container>
          <Row>
            <Column flex="0.5">
              <SectionPadding>
                <Title as="h1" size="bg" bold>
                  {props.title}
                </Title>
                <Subheading as="p" size="sm">
                  {props.description}
                </Subheading>
                <Button label="Buy Now" />
              </SectionPadding>
            </Column>
            <Column flex="0.5">
              <SectionImageWrapper bg={props.imgBg}>
                <Image img={props.img} alt="hero section image" />
              </SectionImageWrapper>
            </Column>
          </Row>
          <Countdown />
        </Container>
      </SectionWrapper>
    </>
  );
};

export default Section;
