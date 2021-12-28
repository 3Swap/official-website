import React from 'react';
import { Coin_bg_left, Coin_bg_right, TokenomicsImg } from '../../../assets';
import Image from '../../../components/Image';
import { SectionWrapper } from '../../../styles/section/Section.styled';
import {
  Legend,
  LegendColor,
  LegendText,
  TokenomicsContainer,
  WrapperContainer,
} from '../../../styles/tokenomics/Tokenomics.styled';
import { Title } from '../../../utility';
import { Column, Container, Row } from '../../../utility/GlobalStyle';

const Tokenomics = () => {
  return (
    <SectionWrapper id="token">
      <Container mxWidth="lg">
        <TokenomicsContainer>
          <Title as="h1" bold>
            Tokenomics
          </Title>
          <Row>
            <WrapperContainer bg={Coin_bg_left}>
              <Column flex="0.7">
                <Image img={TokenomicsImg} alt="tokenomics" />
              </Column>
            </WrapperContainer>
            <WrapperContainer bg={Coin_bg_right}>
              <Column flex="0.3" className="column">
                <Legend>
                  <LegendColor color="#3A0CA3" />
                  <LegendText>Team Reserve</LegendText>
                </Legend>
                <Legend>
                  <LegendColor color="#B5179E;" />
                  <LegendText>Air Drop</LegendText>
                </Legend>
                <Legend>
                  <LegendColor color="#00C5C9" />
                  <LegendText>ICO</LegendText>
                </Legend>
                <Legend>
                  <LegendColor color="#F72585;" />
                  <LegendText>Giveaway</LegendText>
                </Legend>
              </Column>
            </WrapperContainer>
          </Row>
        </TokenomicsContainer>
      </Container>
    </SectionWrapper>
  );
};

export default Tokenomics;
