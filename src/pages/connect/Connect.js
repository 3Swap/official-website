import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SettingImg } from '../../assets';
import { Navbar, Footer, Image, Button, SelectWallet, CoinSetting, Sidebar, Select } from '../../components';
import { FooterData, TokenDemoData } from '../../data';
import { FiChevronDown, FiArrowDown } from '../../utility';
import {
  CoinAmountWrapper,
  CoinContainer,
  ConnectWalletContainer,
  ConnectWalletFromContainer,
  ConnectWalletHeading,
  ConnectWalletWrapper,
  ContainerHeading,
  SelectCoinContainer,
  ConnectSwap,
  ConnectCoinInfo
} from '../../styles/connect/Connect.styled';
import { Column, Container, Heading, Subheading } from '../../utility/GlobalStyle';
import { openModal, openConnectWalletModal } from '../../redux/toggleSlice';

const ConnectWallet = () => {
  const { userInfo } = useSelector(state => state.user);
  const { showModal, showWalletModal } = useSelector(state => state.modal);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenModal = () => {
    dispatch(openModal());
  };
  const handleConnectWallet = () => {
    dispatch(openConnectWalletModal());
  };

  return (
    <>
      <SelectWallet showModal={showWalletModal} />
      <CoinSetting showSetting={showModal} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ConnectWalletWrapper>
        <Container mxWidth="sm">
          <ConnectWalletContainer>
            <ConnectWalletHeading>
              <Heading as="h1" bold uppercase>
                swap
              </Heading>
              <span>
                <Image img={SettingImg} alt="setting" onClick={handleOpenModal} />
              </span>
            </ConnectWalletHeading>
            {/* {Connected Wallet From} */}
            <ConnectWalletFromContainer>
              <ContainerHeading>
                <Heading as="h3">From :</Heading>
                <Heading as="h3">Balance: 300 USDC</Heading>
              </ContainerHeading>
              {/* {Token 1} */}
              <CoinContainer>
                <Column flex="0.6">
                  <SelectCoinContainer>
                    <Select {...TokenDemoData} />
                    <span>
                      <FiChevronDown className="icon" />
                    </span>
                  </SelectCoinContainer>
                  <Heading className="max">Max</Heading>
                </Column>
                <Column flex="0.4">
                  <CoinAmountWrapper>
                    <Heading bold>0.00</Heading>
                    <Subheading>~$0.00</Subheading>
                  </CoinAmountWrapper>
                </Column>
              </CoinContainer>
              <ContainerHeading>
                <Heading as="h3">&nbsp;</Heading>
                <Heading as="h3">Balance: 300 USDC</Heading>
              </ContainerHeading>
              {/* {Token 2} */}
              <CoinContainer>
                <Column flex="0.6">
                  <SelectCoinContainer>
                    <Select {...TokenDemoData} />
                    <span>
                      <FiChevronDown className="icon" />
                    </span>
                  </SelectCoinContainer>
                  <Heading className="max">Max</Heading>
                </Column>
                <Column flex="0.4">
                  <CoinAmountWrapper>
                    <Heading bold>0.00</Heading>
                    <Subheading>~$0.00</Subheading>
                  </CoinAmountWrapper>
                </Column>
              </CoinContainer>
            </ConnectWalletFromContainer>
            <ConnectSwap>
              <span>
                <FiArrowDown className="icon" />
              </span>
            </ConnectSwap>
            {/* {Swap Token To} */}
            <ConnectWalletFromContainer>
              <ContainerHeading>
                <Heading as="h3">To :</Heading>
                <Heading as="h3">Balance: 300 USDC</Heading>
              </ContainerHeading>
              <CoinContainer>
                <Column flex="0.6">
                  <SelectCoinContainer>
                    <Select {...TokenDemoData} />
                    <span>
                      <FiChevronDown className="icon" />
                    </span>
                  </SelectCoinContainer>
                  <Heading className="max">Max</Heading>
                </Column>
                <Column flex="0.4">
                  <CoinAmountWrapper>
                    <Heading bold>0.00</Heading>
                    <Subheading>~$0.00</Subheading>
                  </CoinAmountWrapper>
                </Column>
              </CoinContainer>
            </ConnectWalletFromContainer>
            {/* Transaction Setting } */}
            <ConnectCoinInfo>
              <ContainerHeading>
                <Heading as="h3">Transaction Setting</Heading>
                <Heading as="h3">
                  <Image img={SettingImg} alt="setting" onClick={handleOpenModal} />
                </Heading>
              </ContainerHeading>
              <ContainerHeading>
                <Heading as="h3">Slippage tolerance</Heading>
                <Heading as="h3">2%</Heading>
              </ContainerHeading>
              <ContainerHeading>
                <Heading as="h3">Swap fee</Heading>
                <Heading as="h3">0.12%</Heading>
              </ContainerHeading>
              <Button
                label={!userInfo.name ? 'Connect Wallet' : 'Swap'}
                bgColor="var(--bg-two)"
                textColor="var(--text-color)"
                hoverBg="var(--text-color)"
                hoverColor="var(--bg-one)"
                onClick={!userInfo.name ? handleConnectWallet : null}
              />
            </ConnectCoinInfo>
          </ConnectWalletContainer>
        </Container>
      </ConnectWalletWrapper>

      <Footer {...FooterData} />
    </>
  );
};

export default ConnectWallet;
