import React, { useState } from 'react';
import { SettingImg, Threeswap } from '../../assets';
import { Navbar, Footer, Image, Button, SelectWallet } from '../../components';
import { FooterData } from '../../data';
import { FiChevronDown, FiArrowDown } from '../../utility';
import {
  CoinAmountWrapper,
  CoinContainer,
  CoinLogo,
  ConnectWalletContainer,
  ConnectWalletFromContainer,
  ConnectWalletHeading,
  ConnectWalletWrapper,
  ContainerHeading,
  SelectCoinContainer,
  ConnectSwap,
  ConnectCoinInfo,
} from '../../styles/connect/Connect.styled';
import {
  Column,
  Container,
  Heading,
  Subheading,
} from '../../utility/GlobalStyle';

const ConnectWallet = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <SelectWallet showModal={showModal} setShowModal={setShowModal} />
      <Navbar />
      <ConnectWalletWrapper>
        <Container mxWidth="sm">
          <ConnectWalletContainer>
            <ConnectWalletHeading>
              <Heading as="h1" bold uppercase>
                swap
              </Heading>
              <span>
                <Image img={SettingImg} alt="setting" />
              </span>
            </ConnectWalletHeading>
            <ConnectWalletFromContainer>
              <ContainerHeading>
                <Heading as="h3">From :</Heading>
                <Heading as="h3">Balance: 300 USDC</Heading>
              </ContainerHeading>
              <CoinContainer>
                <Column flex="0.6">
                  <SelectCoinContainer>
                    <CoinLogo>
                      <Image
                        img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEX///9iaI+KkrJFSnVgZo54f6FWXIOBiq1TWoaHj7BeZIxVXIeEjK5CR3P8/P1ZX4lmbJKOlrX09Peepb/s7fLm5+y8vs1PVHw8QnAzOWvY2eL19vixtMWnqr57gKDIytaRla/d3uVudJeHi6jFydiqrcCZoLy1uc2ChqQtNGiiqMLR1OCanrVTWH9+gZw2PGxna4x1f6Y/SHugorUQeEpUAAAJhklEQVR4nO2de1viOhDGN6VcWgqlKIrgiuIFET3uOfv9v9uhXHqdJJMinUkf3n/3Wc3PJG8myWT669dFF1100UUXXXTRj2tC3YBzazwaUzfhzPpYPlM34byaBe3ejLoRZ5XjtP0RdSPOqZvAabvhPXUzzqfr7rYPXTdsrtlceTGh8BtrNrNtF8aEorFm4zgHQrehZrO1mQOhaKbZxDZzJBS9a+rmnEGxzSSETTSb2b4LD4Sit6Fu0I/LcXKEzTObvc2khCJ8pW7Sz+pgMxnCppnNwWayhM0ym03ShSlhs8wm6cEsoSuom/VzWoGEDTKb68ABCUW/KWbz5kkI/Xfqpv2MMjZTIBT9RpjN0HGkhM2IbLI2UyQU4W/q5p2u666iDxsR2bx5SkL7zWYTOEpC0VtQN/E0DQs9WCYUlkc2Kz2h3WZTtBmwD602m6LNgIQ2m03JZkBC0bfWbIYAIEQofOqWVlXZZiSEtprNpGwzEkLRs/N2H7AZGaH/QN3YKoJsRkZopdmUoxkVoRBD6gYbC7QZOWH4l7rBpoJtRtGH1pkNbDMKQtvMZiPrQimhZWYjsxkVoXBtMhuZzSgJbTIbqc0oCW0yG6nNqAlda8xmAUczWkJrzAbcNKEIhW+H2dwrxqiGMPykbjxGKpvREdphNpESUEPotqmbr5fSZrSEFpjNXAOoI+RvNq9Km0EQcjcbjc0gCLmbjSqaQRLyNpsX3SxEEIr+DTWGXFqbQREKf04NIpXWZpCEbM3mSWszOELRe6JGkUgTzeAJuZoNwmaQhEzNZo4Zo0hCEXI0m98Im0ET+o/UOGWhbAZNyNFsUDaDJ3SX1EBF4WwGTyhCZmaDiWbMCAWzN3xImzEh5GU2WJsxIeRlNlibMSLkZDZomzEiZGQ2yGjGmJDPg2G8zZgRsjEbA5txnKg9whNyeTBsYDPR++jr1sUz8jAbtM1E0cPIFZ3BoOWjGTk8GB6jx2hbuNs52Gm1WoNWZ4SE7NGbzQfKZiJn6e4tJiaMGb9wiPRmg7KZKFj6xybvCWPIL4GBJDcbDN/7KLNCJIRbxlvEhKR+VnOjs5m9vWSUIcQx0pqN3mb29iIj3JuOphNDykx3tc1EXtstRTAFQgQj5YPhmbILg2WZDyDcDVYlIuEbPlX/dVP71BJqJiSd2UhtpmQvWkI1I5XZjKU+WrIXBKFqQrp9msjmCrQZ0F4y6ksJt4wDCSON2YA2E3mgvaD6cN+PcDRHUp0A4gtGsL2gCXcTEojmKMymbDMKezEhhE2n/uoE5Xd3KnsxIwRNp/Y3fHmb0dmLKSFgOnWbTc5m4s0R+nwJSRgzfuW2yTWbTaYH85ujnyNsFU3HrRNwldgMzl4qEuZNp06zydZEws6/aoQ506mxFMoxt2spDPEqEGYY63swvHt3lz17OS9hKznTqas6wdDcXk4ljCekO6qt7tLKM7aX0wn3plPPg+FJt11h+p1OuJuQYR3Jpy+9SvPvBwhbrem6livF8XOfqA/X/9S1E96MwvrnYev7ts647T6sOlSrEk6nNR/WjB971bqxGuFg/Vz/Uc1sGdZGeOfTZJ7cVBmqFQinA7KkjPmn+VA1JhysHymf0Ty1++clHNz9oX5h8hKaTUczwumAwUuvodlQNSGc3jF53j0xGap4wsF6SXNzCP3WhYseqmhCOISpY1LOrwDG4W9sPI4knK6hU5nJQy3r/tO/K8C+r59x0xF3IgzG2PPP/2pKzLjpetAAwsXjGMLvDkRyE/Zqq5j15nXfoAlx39cPVT3h9BuKsZ+Wfb++LLdx4HjdV+BZy/hRu3XUEQ7uniU/uNakjLj8jBe8AP+ijcc1hHcCirF3m7VerdHpLs0kiKDW3PjKoaoknE4hitlugtd8NXMof9z9gCxPuXVUEG43gdAAPZh03QV6Dhl7Xhf6o6vicTnh3R9oSLweFtr6M/iOlzOBAzu7bDrKCOEBuhgdfg5FacXkYXoXDHL+SlxVkjF09wkMwsnDcbyTpEOnF1BeAAU5kwdwqIJZX+AmcPtHOnqWS1OBP1PjwwODnIUAhipA+N2CNoEvfvq/qV7NZjMTAzDI+V0OckqE8CYwZ1Zk2YnzbLaC1wXj8ffiylHML10/AAOwcABEV4Ign+TtBdBg24xCBSG8CSwc4lGmeq/yaUOSeDy3dcwSwpvAbeCX/7oAaYmFKJ+9J4vHM2Oukxmg0CawdJhO/G6mlBqljccTQngTWL4Qoa5XU34TJInHjy3vHEMYaBO4EaVNNH15BSDLVBKP74Oczn6AQjH29Xs5RmBQsB16xa2Kxzu7EAboZvgwi0P5CDCTVhKPb8OUzgC+aFn4UKzO47tecLFSOB7/7N2uwRgb3m9xKfwFP7GEg5zJM2CNsjss6jdPiWQlzDwHN8ak95B8XuS/yN7OwPF4Xk/Ss6s+gwekR8EPE6RDNSPFoQ6r+teKwh9wkHOU6gyZzWv8neT1u1VDdbNU3ANw+0ySslRb9xXqDvVdDv0D4KIUgPF0LA/VV+UlB8MPXGqqXgZRPshZjNSn/3wWilS6J8HdjzTImTxobnB4fsBTV9kzicczx4SyMcqiWkRJ8veIyVD14qG60Oan0D5uVki1ZByH6tUMPijOT0LVEkoqTAUJRIY/v4Ui0VAPiKnAw/lDF4gqGXpC8koYSq20bqMl5P6JsujUet5MF4pUwDcdjQjZLhSpdEWVdHX1yY9H9ZLuhjGEDI5H9ZqfQigYHI/qpV4ylIS8F4pUyiVDRch9oUilWjJUX0PivlCkUi0Ziq+S0SRcVJP0AFVFaMNCkUq+ZEgJKctBVZD8AFVOaMVCkUpaJEv6DUtLFopUsgNU2XdImdyjmUhS1hQmtGihSCU5QIUJqRMuqgneZYCEnO7RTAQeoILfVrdhRwEJPEAFv61u2UKRCjpABQh5JFxUE7BklAltXCgSAQeoJUI2CRfVVF4ySoQc79FMVLpzKxJyqNh9mopLRoGQVcJFNRVLDRcIeSVcVNMmUBByS7iopvydW46Q8T2aiYZSQoYJF9WUO0DNEtq+UKTKHqBmCHkmXFRT5gA1JfSZfuWwkq6DMqEF92gmSnfDCSHfhItqSpaMI2FDFopU8yIh54SLajouGQdC+45H9TosGXtCe+7RTBSlhFYej+q1XzJiwoYtFKl2d24xoV33aCaKd8NbQsvu0Uw03hO61h6P6jXrbgmbuFCkWnntkEkNtnMpajdzoUg1EVbeo5moMdv6iy666KKLLrqIk/4HejC4vBI77h4AAAAASUVORK5CYII="
                        alt="eth"
                      />
                    </CoinLogo>
                    <Heading bold uppercase>
                      ETH
                    </Heading>
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
              <CoinContainer>
                <Column flex="0.6">
                  <SelectCoinContainer>
                    <CoinLogo>
                      <Image
                        img="https://thumbor.forbes.com/thumbor/trim/0x104:692x565/fit-in/692x461/smart/https://specials-images.forbesimg.com/imageserve/60c0b56bd5ce12d0d5b06509/Solana-logo/0x0.jpg"
                        alt="eth"
                      />
                    </CoinLogo>
                    <Heading bold uppercase>
                      USDC
                    </Heading>
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
            <ConnectWalletFromContainer>
              <ContainerHeading>
                <Heading as="h3">To :</Heading>
                <Heading as="h3">Balance: 300 USDC</Heading>
              </ContainerHeading>
              <CoinContainer>
                <Column flex="0.6">
                  <SelectCoinContainer>
                    <CoinLogo>
                      <Image img={Threeswap} alt="3swap" />
                    </CoinLogo>
                    <Heading bold uppercase>
                      3swap
                    </Heading>
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
            <ConnectCoinInfo>
              <ContainerHeading>
                <Heading as="h3">Transaction Setting</Heading>
                <Heading as="h3">
                  <Image img={SettingImg} alt="setting" />
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
                label="Connect Wallet"
                bgColor="var(--bg-two)"
                textColor="var(--text-color)"
                hoverBg="var(--text-color)"
                hoverColor="var(--bg-one)"
                onClick={openModal}
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
