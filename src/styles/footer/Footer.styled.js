import styled from 'styled-components';
import { Column, Heading, Subheading } from '../../utility/GlobalStyle';
import { Icon } from '../team/Team.styled';
export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  ${Column} {
    margin-right: 10px;
  }
  ${Subheading} {
    font-size: 12px;
    line-height: 21px;
    font-weight: normal;
    max-width: 30ch;
  }
`;
export const FooterLogo = styled.div`
  img {
    width: 100px;
    height: 40px;
    object-fit: contain;
  }
`;
export const FooterSocialIcon = styled.div`
  margin-top: 20px;

  ${Icon} {
    margin-right: 20px;
    cursor: pointer;
    font-size: 20px;
  }
`;

export const FooterLinkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
export const FooterLink = styled.div`
  display: flex;
  flex-direction: column;

  ${Heading} {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 20px;
  }
`;
export const Link = styled.a`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
`;
