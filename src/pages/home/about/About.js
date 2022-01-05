import React from 'react';
import { FiDownloadCloud } from '../../../utility';
import { Coin_1, Coin_2, Whitepaper } from '../../../assets';
import Button from '../../../components/Button';
import Image from '../../../components/Image';
import { Sponsors } from '../../../data/Sponsor.data';
import { AboutWrapper, Box, BrandContainer } from '../../../styles/about/About.styled';
import { SectionImageWrapper } from '../../../styles/section/Section.styled';
import {
  Row,
  Column,
  Container,
  SectionContainer,
  Heading,
  Title,
  ButtonWrapper,
  Subheading,
  SectionLink
} from '../../../utility/GlobalStyle';

const About = props => {
  return (
    <>
      <AboutWrapper id="about">
        <SectionContainer>
          <Container>
            <Row>
              <Column>
                <Heading bold uppercase textColor="#000">
                  {props.topheading}
                </Heading>
                <Title as="h1" bold uppercase textColor="#B50050">
                  {props.heading}
                </Title>
                <Subheading as="p">{props.description}</Subheading>
                <ButtonWrapper>
                  <a href={Whitepaper} target="_blank" rel="noreferrer">
                    <Button
                      label="Whitepaper"
                      bgColor="var(--bg-two)"
                      textColor="var(--text-color)"
                      hoverColor="var(--text-color)"
                      icon={<FiDownloadCloud className="icon" />}
                    />
                  </a>
                </ButtonWrapper>
              </Column>
              <Column>
                <SectionImageWrapper bg={props.imgBg}>
                  <Image img={props.img} alt="hero section image" />
                </SectionImageWrapper>
                <Box bg={Coin_2} />
                <Box bg={Coin_1} />
                <Box bg={props.imgBg} />
              </Column>
            </Row>
            <Row>
              <Column>
                <BrandContainer>
                  {Sponsors.map((props, i) => (
                    <SectionLink href={props.url} key={i} target="_blank">
                      <Image img={props.logo} alt={props.name} />
                    </SectionLink>
                  ))}
                </BrandContainer>
              </Column>
            </Row>
          </Container>
        </SectionContainer>
      </AboutWrapper>
    </>
  );
};

export default About;
