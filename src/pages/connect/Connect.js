<<<<<<< HEAD
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
=======
// import React, { useEffect, useState } from 'react';
// import Moralis from 'moralis';
// import { SettingImg } from '../../assets';
// import { Navbar, Footer, Image, Button, SelectWallet, CoinSetting, Sidebar, Select } from '../../components';
// import { FooterData } from '../../data';
// import { FiChevronDown, FiArrowDown } from '../../utility';
// import {
//   CoinAmountWrapper,
//   CoinContainer,
//   ConnectWalletContainer,
//   ConnectWalletFromContainer,
//   ConnectWalletHeading,
//   ConnectWalletWrapper,
//   ContainerHeading,
//   SelectCoinContainer,
//   ConnectSwap,
//   ConnectCoinInfo
// } from '../../styles/connect/Connect.styled';
// import { Column, Container, Heading, Subheading } from '../../utility/GlobalStyle';
// import { Swap } from '../../utility/function';

// const ConnectWallet = () => {
//   //  Moralis
//   Moralis.initialize('KmcuuWG2cBoIOgXxKjbaXbk4K21lrjkWUjs7Zxko');
//   Moralis.serverURL = 'https://bhbsz1b9snza.usemoralis.com:2053/server';
//   //  State
//   const [showModal, setShowModal] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSetting, setShowSetting] = useState(false);
//   const [tokenAddress, setTokenAddress] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [currentUser, setCurrentUser] = useState();

//   //  Modals & Functions
//   const openModal = () => {
//     setShowModal(prev => !prev);
//   };
//   const openSetting = () => {
//     setShowSetting(prev => !prev);
//   };
//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };

//   //  Initialize Moralis
//   async function init() {
//     await Moralis.initPlugins();
//     await Moralis.enableWeb3();
//     setCurrentUser(Moralis.User.current());
//     listAvailableTokens();
//     setLoading(true);
//   }

//   // Get List of all available Tokens
//   const listAvailableTokens = async () => {
//     const result = await Moralis.Plugins.oneInch.getSupportedTokens({
//       chain: 'eth' // The blockchain you want to use (eth/bsc/polygon)
//     });
//     setTokenAddress(result.tokens);
//     setLoading(false);
//   };

//   useEffect(() => {
//     init();
//   }, []);

//   return (
//     <>
//       <SelectWallet showModal={showModal} setShowModal={setShowModal} />
//       <CoinSetting showSetting={showSetting} setShowSetting={setShowSetting} />
//       <Sidebar isOpen={isOpen} toggle={toggle} />
//       <Navbar toggle={toggle} />
//       <ConnectWalletWrapper>
//         <Container mxWidth="sm">
//           <ConnectWalletContainer>
//             <ConnectWalletHeading>
//               <Heading as="h1" bold uppercase>
//                 swap
//               </Heading>
//               <span>
//                 <Image img={SettingImg} alt="setting" onClick={openSetting} />
//               </span>
//             </ConnectWalletHeading>
//             {/* {Connected Wallet From} */}
//             <ConnectWalletFromContainer>
//               <ContainerHeading>
//                 <Heading as="h3">From :</Heading>
//                 <Heading as="h3">Balance: 300 USDC</Heading>
//               </ContainerHeading>
//               {/* {Token 1} */}
//               <CoinContainer>
//                 <Column flex="0.6">
//                   <SelectCoinContainer>
//                     <Select tokens={tokenAddress} loading={loading} />
//                     <span>
//                       <FiChevronDown className="icon" />
//                     </span>
//                   </SelectCoinContainer>
//                   <Heading className="max">Max</Heading>
//                 </Column>
//                 <Column flex="0.4">
//                   <CoinAmountWrapper>
//                     <Heading bold>0.00</Heading>
//                     <Subheading>~$0.00</Subheading>
//                   </CoinAmountWrapper>
//                 </Column>
//               </CoinContainer>
//               <ContainerHeading>
//                 <Heading as="h3">&nbsp;</Heading>
//                 <Heading as="h3">Balance: 300 USDC</Heading>
//               </ContainerHeading>
//               {/* {Token 2} */}
//               <CoinContainer>
//                 <Column flex="0.6">
//                   <SelectCoinContainer>
//                     <Select tokens={tokenAddress} loading={loading} />
//                     <span>
//                       <FiChevronDown className="icon" />
//                     </span>
//                   </SelectCoinContainer>
//                   <Heading className="max">Max</Heading>
//                 </Column>
//                 <Column flex="0.4">
//                   <CoinAmountWrapper>
//                     <Heading bold>0.00</Heading>
//                     <Subheading>~$0.00</Subheading>
//                   </CoinAmountWrapper>
//                 </Column>
//               </CoinContainer>
//             </ConnectWalletFromContainer>
//             <ConnectSwap>
//               <span>
//                 <FiArrowDown className="icon" />
//               </span>
//             </ConnectSwap>
//             {/* {Swap Token To} */}
//             <ConnectWalletFromContainer>
//               <ContainerHeading>
//                 <Heading as="h3">To :</Heading>
//                 <Heading as="h3">Balance: 300 USDC</Heading>
//               </ContainerHeading>
//               <CoinContainer>
//                 <Column flex="0.6">
//                   <SelectCoinContainer>
//                     <Select tokens={tokenAddress} loading={loading} />
//                     <span>
//                       <FiChevronDown className="icon" />
//                     </span>
//                   </SelectCoinContainer>
//                   <Heading className="max">Max</Heading>
//                 </Column>
//                 <Column flex="0.4">
//                   <CoinAmountWrapper>
//                     <Heading bold>0.00</Heading>
//                     <Subheading>~$0.00</Subheading>
//                   </CoinAmountWrapper>
//                 </Column>
//               </CoinContainer>
//             </ConnectWalletFromContainer>
//             {/* Transaction Setting } */}
//             <ConnectCoinInfo>
//               <ContainerHeading>
//                 <Heading as="h3">Transaction Setting</Heading>
//                 <Heading as="h3">
//                   <Image img={SettingImg} alt="setting" onClick={openSetting} />
//                 </Heading>
//               </ContainerHeading>
//               <ContainerHeading>
//                 <Heading as="h3">Slippage tolerance</Heading>
//                 <Heading as="h3">2%</Heading>
//               </ContainerHeading>
//               <ContainerHeading>
//                 <Heading as="h3">Swap fee</Heading>
//                 <Heading as="h3">0.12%</Heading>
//               </ContainerHeading>
//               <Button
//                 label={!currentUser ? 'Connect Wallet' : 'Swap'}
//                 bgColor="var(--bg-two)"
//                 textColor="var(--text-color)"
//                 hoverBg="var(--text-color)"
//                 hoverColor="var(--bg-one)"
//                 onClick={!currentUser ? openModal : Swap}
//               />
//             </ConnectCoinInfo>
//           </ConnectWalletContainer>
//         </Container>
//       </ConnectWalletWrapper>
>>>>>>> b7b69220d2408188e176a461c0284e36f79c42c0

//       <Footer {...FooterData} />
//     </>
//   );
// };

// export default ConnectWallet;
