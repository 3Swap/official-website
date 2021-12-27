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
`;
export const SectionPadding = styled.div`
  padding-left: 50px;

  ${Title} {
    font-size: 70px;
    line-height: 105px;
  }

  @media screen and (max-width: 768px) {
    padding: 30px;
    ${Title} {
      font-size: 80px;
    }
    ${Subheading} {
      font-size: 18px;
      line-height: 28px;
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
