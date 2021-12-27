import styled from 'styled-components';
import { Heading, Subheading } from '../../utility/GlobalStyle';

export const SectionTeamContainer = styled.div`
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100%;
  padding-bottom: 80px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TeamMeber = styled.div`
  background: url(${({ bg }) => bg || ''}) no-repeat;
  height: 300px;
  width: 100%;
  background-size: contain;
  position: relative;
  margin-bottom: -40px;
`;
export const TeamContainer = styled.div`
  display: grid;
  height: 100%;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 2fr);
  }
`;
export const SocialIcon = styled.div`
  background: #0b131a;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 280px;
  opacity: 0.67;
  border-radius: 0px 20px 20px 0px;
  width: 50px;
  position: absolute;
  right: 0;
  padding: 20px 0px;

  @media screen and (max-width: 768px) {
    position: relative;
  }
`;
export const TeamMeberInfo = styled.div`
  position: absolute;
  bottom: 30px;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  font-weight: bold;
  color: #ddd;
  ${Heading} {
    font-size: 12px;
    font-weight: 600;
  }
  ${Subheading} {
    font-size: 12px;
    font-weight: 600;
    margin: 0px auto;
    max-width: 23ch;
  }
`;
export const Icon = styled.a`
  color: var(--text-color);
  transition: all 300ms ease-out;
  &:hover {
    color: var(--bg-two);
    font-size: 30px;
    transition: all 300ms ease-out;
  }
`;
