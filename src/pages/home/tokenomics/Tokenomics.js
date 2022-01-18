import React from 'react';
import { Coin_bg_left, Coin_bg_right, TokenomicsImg } from '../../../assets';
import Image from '../../../components/Image';
import { SectionWrapper } from '../../../styles/section/Section.styled';
import {
  Legend,
  LegendColor,
  LegendText,
  TokenomicsContainer,
  WrapperContainer
} from '../../../styles/tokenomics/Tokenomics.styled';
import { Title } from '../../../utility';
import { Column, Container, Row, Subheading } from '../../../utility/GlobalStyle';

const Tokenomics = () => {
  return (
    <SectionWrapper id="token">
      <Container mxWidth="lg">
        <TokenomicsContainer>
          <Title as="h1" bold>
            Tokenomics
          </Title>
          <Subheading>Total Supply : 1,000,000,000 SAP</Subheading>
          <Row>
            <WrapperContainer bg={Coin_bg_left}>
              <Column flex="0.7">
                <Image img={TokenomicsImg} alt="tokenomics" />
              </Column>
            </WrapperContainer>
            <WrapperContainer bg={Coin_bg_right}>
              <Column flex="0.3" className="column">
                <Legend>
                  <LegendColor color="#000" />
                  <LegendText>Token Sales</LegendText>
                </Legend>
                <Legend>
                  <LegendColor color="#B5179E;" />
                  <LegendText>Team</LegendText>
                </Legend>
                <Legend>
                  <LegendColor color="#00C5C9" />
                  <LegendText>Research &amp; Partnership</LegendText>
                </Legend>
                <Legend>
                  <LegendColor color="#F72585;" />
                  <LegendText>Staking, Liquidity Mining Rewards</LegendText>
                </Legend>
                <Legend>
                  <LegendColor color="blue" />
                  <LegendText>Marketing</LegendText>
                </Legend>
                <Legend>
                  <LegendColor color="yellow" />
                  <LegendText>Liquidity</LegendText>
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
