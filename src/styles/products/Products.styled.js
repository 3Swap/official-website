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
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
`;
export const ProductConent = styled.div`
  background: #fff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  width: 100%;
  padding: 20px 50px;
  height: 320px;
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
  img:nth-child(1) {
    position: absolute;
    width: 60px;
    top: -8px;
    object-fit: contain;
  }
  img:nth-child(2) {
    position: absolute;
    top: -10px;
    z-index: 1;
    width: 55px;
    object-fit: contain;
  }
  img:nth-child(3) {
    position: absolute;
    top: -10px;
    z-index: 2;
    width: 55px;
    object-fit: contain;
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
  }
  ${Heading} {
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
  }
`;
export const ImageWrapper = styled.div`
  img:nth-child(1) {
    height: 200px;
    object-fit: contain;
    position: absolute;
    left: 0;
    top: 35%;
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
  ${Title} {
    font-size: 45px;
    line-height: 68px;
    span {
      color: var(--bg-two);
    }
  }

  ${Subheading} {
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    max-width: 60ch;
  }

  ${Column} {
    &:nth-child(1) {
    }
    &:nth-child(2) {
      img {
        height: 300px;
        width: 100%;
        object-fit: contain;
      }
    }
  }
`;

export const SupportedBy = styled.div`
  background: rgba(22, 32, 40, 0.5);
  border-radius: 20px;
  padding: 20px 30px;
  text-align: center;

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
    }
  }
`;
