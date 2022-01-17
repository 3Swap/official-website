import styled from 'styled-components';
import { Bg_black } from '../../assets/index';
export const ListBoxContainer = styled.div`
  width: 100%;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ListBoxWrapper = styled.div`
  width: 400px;
  margin: 0px auto;
  height: 400px;
  min-height: 450px;
  overflow-y: scroll;
  padding: 20px 0px;
  border-radius: 20px;
  background: #2a2a2a;
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  ul {
    list-style-type: none;

    li {
      padding: 20px 30px;
      margin-bottom: 10px;
      width: 100%;
      align-items: center;

      &:hover {
        background: #303030;
      }
    }
  }

  .selectBox {
    align-items: center;
    height: 298px;
    overflow-y: scroll;
    min-height: 200px;
    ::-webkit-scrollbar {
      width: 0; /* Remove scrollbar space */
      background: transparent; /* Optional: just make scrollbar invisible */
    }
    img {
      width: 20px;
      border-radius: 50%;
      height: 20px;
      margin-right: 10px;
      object-fit: cover;
    }
    .options {
      display: flex;
      align-items: center;
      cursor: pointer;
      h1 {
        font-size: 18px;
        color: #ccc;
      }
    }
  }
`;

export const SwapWrapper = styled.div`
  width: 100%;
  display: flex;
  background: radial-gradient(19.57% 100% at 6.55% 9.79%, rgba(0, 115, 180, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    linear-gradient(0deg, #0b131a, #060e14);
  height: 100%;
  min-height: 750px;
  overflow: auto;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    min-height: 100vh;
  }
`;
export const SwapHeader = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;

  .logo {
    margin-top: 8px;
    img {
      width: 100%;
      height: 40px;
      object-fit: contain;
    }
    @media screen and (max-width: 768px) {
      margin-left: -40px;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 20px 0 50px 0;
    padding: 0px 10px;
  }
  .connectWallet {
    margin-top: -20px;
  }
`;

export const Swapdemo = styled.div`
  display: flex;
  width: 500px;
  min-height: 630px;
  height: max-content;
  margin: 40px auto 0;
  background-image: url(${Bg_black});
  background-position: 50%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 30px;
  position: relative;
  margin-bottom: 80px;

  .swap__demo__setting {
    background: #2a2a2a;
    border-radius: 50%;
    display: flex;
    align-items: center;
    position: absolute;
    right: 20px;
    top: 13px;
    cursor: pointer;
    .icon {
      color: #ccc;
      font-size: 40px;
      padding: 8px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 95%;
    margin: 10px;
    padding: 0;
  }
`;

export const SwapContainer = styled.div`
  .swap__heading {
    h1 {
      color: #ccc;
      font-size: 2rem;

      @media screen and (max-width: 768px) {
        padding: 20px 20px;
        margin-bottom: -20px;
      }
    }
  }
`;
export const SwapFromWrapper = styled.div`
  margin-top: 50px;
  width: 430px;
  padding: 20px;
  background: #2a2a2a;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  .form__heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    h3 {
      font-size: 14px;
      color: #ccc;
      font-weight: 400;
      text-transform: capitalize;

      span {
        font-size: 12px;
        cursor: pointer;
        color: #fff;
        margin-left: 8px;
      }
    }
  }

  .form__input {
    width: 100%;
    display: flex;
    padding: 20px 5px;
    margin-bottom: 8px;
    border: 1px solid #ffffff0e;
    border-radius: 8px;

    .swap_select {
      height: auto;
      display: flex;
      align-items: center;
      flex: 0.4;
      width: 100%;
      .swapWrap {
        align-items: center;
        display: flex;
        flex: 1;
        cursor: pointer;
        .btn {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 10px;
          border: none;
          background: transparent;
          justify-content: space-between;
          font-size: 20px;
          color: #ccc;
          outline: none;

          .icon {
            font-size: 14px;
          }
        }
        .img {
          width: 30px;
          object-fit: contain;
          height: 30px;
          border-radius: 50%;
        }
      }
    }

    .swap_input {
      flex: 0.6;

      input {
        background: transparent;
        text-align: right;
        color: #ccc;
      }
    }
  }
  .swap_to_token {
    background: #303030;
    border-radius: 8px;
    margin-top: -20px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    h1 {
      font-size: 16px;
      color: #fff;
      padding: 15px 10px 0px 10px;
    }
    .form__input {
      border: none;
    }
    .swap_select {
      flex: 1;

      .swapWrap {
        .btn {
          justify-content: flex-start;
          width: 100%;
          .img {
            margin-right: 10px;
          }
          .item {
            width: 100%;
            text-align: left;
          }
        }
      }
    }
  }
  .divider {
    position: relative;
    .swapIcon {
      position: absolute;
      left: 10%;
      top: -30px;
      border-radius: 50%;
      background: #303030;
      font-size: 35px;
      padding: 5px 0px;
      cursor: pointer;
      color: var(--bg-primary);
    }
  }
  .swap__button {
    width: 100%;
    display: flex;
    margin-top: 20px;
    button {
      width: 100%;
      font-size: 20px;
      padding: 15px 0px;
      font-weight: 800;
    }
  }
`;

export const TokenSelectorHeader = styled.div`
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: -20px;
  margin-bottom: 30px;
  z-index: 2;

  .token__selector__heading {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 0px;
    justify-content: space-between;

    h2 {
      color: #ccc;
      font-size: 16px;
    }
    .icon {
      font-size: 25px;
      color: #ccc;
    }
  }
  input {
    background: #121212;
    border-radius: 5px;
    font-size: 16px;
    padding: 15px 20px;
    margin-top: 20px;
  }
`;
