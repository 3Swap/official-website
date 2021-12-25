import styled from 'styled-components';
import { Title } from '../../utility';
import { Heading, Subheading } from '../../utility/GlobalStyle';

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
