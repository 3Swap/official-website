import React from 'react';
import { useSelector } from 'react-redux';
import { SectionImageWrapper, SectionWrapper, SectionPadding } from '../styles/section/Section.styled';
import { Title } from '../utility';
import { Row, Column, Container, Subheading, NavLink } from '../utility/GlobalStyle';
import Button from './Button';
import Countdown from './Countdown';
import { BuyNow, Image } from './index';

const Section = props => {
  const { showModal } = useSelector(state => state.modal);
  return (
    <>
      <BuyNow open={showModal} />
      <SectionWrapper id="home">
        <Container>
          <Row>
            <Column flex="0.5">
              <SectionPadding className="about">
                <Title as="h1" size="bg" bold>
                  {props.title}
                </Title>
                <Subheading as="p" size="sm">
                  {props.description}
                </Subheading>
                <NavLink to="/">
                  <Button
                    label="Demo App"
                    bgColor="var(--bg-two)"
                    textColor="var(--text-color)"
                    hoverBg="var(--text-color)"
                    hoverColor="var(--bg-one)"
                  />
                </NavLink>
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
