import styled from 'styled-components';
import { Column, Heading, Subheading } from '../../utility/GlobalStyle';

export const ConnectWalletWrapper = styled.div`
  width: 100%;
  padding: 80px 0px;
  @media screen and (max-width: 768px) {
    padding: 40px 10px;
  }
`;
export const ConnectWalletContainer = styled.div`
  background: #0b131a;
  border-radius: 18.0316px;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 30px 20px;
  }
`;
export const ConnectWalletHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  ${Heading} {
    font-size: 26px;
    line-height: 27px;
  }

  span {
    background: #162028;
    border-radius: 8px;
    display: flex;
    cursor: pointer;
    align-items: center;
    padding: 10px;
  }
`;
export const ContainerHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${Heading} {
    font-size: 12px;

    img {
      cursor: pointer;
    }
  }
`;
export const ConnectWalletFromContainer = styled.div`
  width: 100%;
  background: #162028;
  padding: 30px 50px;
  border-radius: 14.3677px;
  display: flex;
  flex-direction: column;

  ${ContainerHeading}:nth-child(3) {
    ${Heading} {
      margin-top: 15px;
      margin-bottom: -15px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const CoinContainer = styled.div`
  display: flex;
  margin-top: 30px;

  ${Column}:nth-child(1) {
    display: flex;
    align-items: center;

    .max {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 9px;
      margin-left: 10px;
    }
  }
  ${Column}:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 768px) {
      justify-content: flex-end;
    }
  }
`;
export const CoinWrapper = styled.div`
  flex: 0.5;
  background: red;
  height: 100px;
  width: 100%;
  margin-right: 10px;
`;
export const SelectCoinContainer = styled.div`
  width: 50%;
  background: #ffffff;
  box-shadow: 0px 7.20454px 28.8182px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  color: var(--bg-one);
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  span {
    margin-right: 5px;
    display: flex;

    .icon {
      font-weight: 600;
    }
  }

  ${Heading} {
    font-size: 12px;
  }
  .MenuItem {
    img {
      display: none;
    }
  }
  .MenuBox {
    display: flex;
    overflow: hidden;
    align-items: center;
    padding: 2px;
    .MenuLabel {
      font-size: 12px;
      text-transform: uppercase;
      font-family: 'Lora';
      font-weight: 600;
      .defualt {
        text-transform: capitalize;
        font-size: 11px;

        @media screen and (max-width: 768px) {
          font-size: 10px;
        }
      }
    }
    .MenuImg {
      img {
        width: 20px;
        height: 20px;
        object-fit: contain;
        border-radius: 50%;
      }
    }
  }
`;
export const CoinLogo = styled.div`
  margin-left: 5px;
  display: flex;
  align-items: center;
  img {
    width: 100%;
    height: 20px;
    object-fit: contain;
    margin-right: 3px;
  }
`;
export const CoinName = styled.div``;

export const CoinAmountWrapper = styled.div`
  letter-spacing: 1px;
  ${Heading} {
    font-size: 20px;
  }
  ${Subheading} {
    font-size: 8px;
    line-height: 5px;
  }
`;

export const ConnectSwap = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 0px;
  display: flex;
  span {
    background: #fff;
    border-radius: 20px;
    display: flex;
    .icon {
      color: var(--bg-one) !important;
      font-size: 12px;
    }
  }
`;

export const ConnectCoinInfo = styled.div`
  margin-top: 20px;
  padding: 0px 30px;

  ${ContainerHeading} {
    padding: 5px 0px;
  }
  button {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    font-weight: 600;
    font-size: 16px;
    padding: 15px;
  }
`;
