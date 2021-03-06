import styled from 'styled-components';
import { Title } from '../../utility';
import { Subheading } from '../../utility/GlobalStyle';
export const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  background: ${({ bg }) => bg || ''};
  color: ${({ textColor }) => textColor || ''};
  padding: 80px 0px;

  @media screen and (max-width: 768px) {
    padding: 20px 0px;
  }

  .about {
    ${Title} {
      font-size: 45px;
      max-width: 400px;
      line-height: 50px;
      margin-bottom: 20px;
    }

    ${Subheading} {
      font-size: 20px;
      line-height: 32px;
      max-width: 300px;
      opacity: 0.9;
    }
  }
`;
export const SectionPadding = styled.div`
  padding-left: 50px;

  ${Title} {
    font-size: 40px;
    line-height: 50px;
    margin-bottom: 20px;
  }

  ${Subheading} {
    font-size: 20px;
    line-height: 30px;
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    padding: 30px;
    ${Title} {
      font-size: 50px !important;
      line-height: 60px !important;
      margin-bottom: 20px;
    }

    ${Subheading} {
      font-size: 20px;
      line-height: 32px;
      opacity: 0.9;
    }
  }
  @media screen and (max-width: 375px) {
    ${Title} {
      font-size: 46px !important;
    }
  }
`;

export const SectionImageWrapper = styled.div`
  background: url(${({ bg }) => bg || ''}) no-repeat;
  background-position-y: -20%;
  background-position-x: left;
  img {
    width: 100%;
    height: 400px;
    object-fit: contain;
    margin-top: -80px;
  }

  @media screen and (max-width: 768px) {
    background-position-y: 0;
    background-position-x: left;

    img {
      width: 100%;
      height: 350px;
      object-fit: contain;
      margin: 20px 0px;
    }
  }
`;

// export const SectionBg = styled.div`
//   width: 80%;
//   margin: 0px auto;
//   background: url(${({ bg }) => bg || ''}) no-repeat;
//   padding-bottom: 80px;
//   background-position-y: 100%;
//   background-position-x: 100%;
// `;
