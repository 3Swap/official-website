import styled from 'styled-components';
import { Title } from '../../utility';
import { Column, Heading, Subheading } from '../../utility/GlobalStyle';
import { BrandContainer } from '../about/About.styled';

export const ProductSectionWrapper = styled.div`
  background: #fff;
  padding: 80px 0px;
  color: #000;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${Title} {
    font-size: 40px;
  }

  @media screen and (max-width: 768px) {
    padding: 80px 20px;
  }
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProductLogo = styled.div`
  position: relative;
  height: 40px;
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
  transition: all 0.8s ease-out;
  img:nth-child(1) {
    position: absolute;
    width: 60px;
    top: -8px;
    object-fit: contain;

    &:hover {
      display: none;
    }
  }
  img:nth-child(2) {
    position: absolute;
    top: -10px;
    z-index: 1;
    width: 55px;
    object-fit: contain;
  }
  .icon {
    z-index: 2;
    width: 55px;
    object-fit: contain;
    color: #fff;
    font-size: 25px;
  }
`;
export const ProductHeading = styled.div`
  ${Heading} {
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }
`;
export const ProductDetails = styled.div`
  margin-top: 10px;
  ${Subheading} {
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    color: var(--bg-one);

    @media screen and (max-width: 768px) {
      font-size: 12px;
      line-height: 20px;
    }
  }
`;
export const ProductConent = styled.div`
  background: #fff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  width: 100%;
  padding: 20px 50px;
  height: 100%;
  transition: all 0.8s ease-out;
  &:hover {
    background: var(--bg-two);
    transition: all 0.8s ease-out;
    ${ProductLogo} {
      img:nth-child(2) {
        display: none;
        transition: all 0.8s ease-out;
      }
    }
    ${Subheading} {
      color: #fff;
    }
    .icon {
      color: var(--bg-two);
      transition: all 0.8s ease-out;
    }
  }
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;
export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  position: relative;
  ${Subheading} {
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    max-width: 70ch;
    color: #ccc;
    margin-top: 8px;

    @media screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 25px;
    }
  }
  ${Heading} {
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 30px;

    button {
      padding: 15px 30px;
      font-size: 16px;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 768px) {
    text-align: center;

    ${Title} {
      font-size: 2.5rem;
      line-height: 50px;
      padding-bottom: 10px;
    }
  }
`;
export const ImageWrapper = styled.div`
  img:nth-child(1) {
    height: 200px;
    object-fit: contain;
    position: absolute;
    left: 0;
    top: 35%;

    @media screen and (max-width: 768px) {
      height: 150px;
      top: 65%;
      opacity: 0.5;
    }
  }
  img:nth-child(2) {
    height: 150px;
    object-fit: contain;
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0.33;
    filter: blur(5px);
  }
`;

export const InfoSectionWrapper = styled.div`
  margin: 0px auto;
  .infosection {
    ${Title} {
      max-width: 19ch;
      line-height: 55px;
    }
    .sub {
      text-transform: initial;
    }
  }
  @media screen and (max-width: 768px) {
    text-align: center;

    button {
      text-align: center;
      width: 100%;
      font-size: var(--font-mb);
      font-weight: 600;
      padding: 15px 0px;
    }
  }
  ${Title} {
    font-size: 45px;
    line-height: 68px;
    span {
      color: var(--bg-two);
    }
    @media screen and (max-width: 768px) {
      text-align: left;
      font-size: 2.3rem !important;
      line-height: 50px !important;
      padding-bottom: 10px;
    }
  }

  ${Subheading} {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    max-width: 60ch;

    ul {
      margin-left: 30px;

      li {
        margin: 5px 0;
      }
    }
    @media screen and (max-width: 768px) {
      font-size: var(--font-mb);
      line-height: 26px;
      text-align: left !important;
    }
  }

  ${Column} {
    &:nth-child(1) {
    }
    &:nth-child(2) {
      img {
        height: 300px;
        width: 100%;
        object-fit: contain;

        @media screen and (max-width: 768px) {
          height: 400px;
          margin-top: -50px;
        }
      }
    }
  }
`;

export const SupportedBy = styled.div`
  background: rgba(22, 32, 40, 0.5);
  border-radius: 20px;
  padding: 20px 30px;
  text-align: center;

  @media screen and (max-width: 768px) {
    ${Heading} {
      font-size: var(--font-md);
      font-weight: 600;
    }
  }
  ${BrandContainer} {
    margin-top: 0px;
    background: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    img {
      background: #162028;
      border-radius: 10px;
      padding: 10px 30px;

      @media screen and (max-width: 768px) {
        padding: 0px;
        background: transparent;
        width: 90px;
        height: 50px;
        margin: 0px auto;
        object-fit: contain;
      }
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 0px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 20px 0px;
    background: transparent;
  }
`;
