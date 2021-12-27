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
    padding: 40px 30px 80px 30px;
  }
`;
export const TeamContainer = styled.div`
  display: grid;
  height: 100%;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;
export const TeamMeber = styled.div`
  background: url(${({ bg }) => bg || ''}) no-repeat;
  height: 300px;
  width: 100%;
  background-size: contain;
  position: relative;
  margin-bottom: -40px;

  .teamImg {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
  .team {
    display: flex;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 0px;
    height: 100%;

    .teamImg {
      width: 100%;
      height: 400px;
    }

    .team {
      flex-direction: column-reverse;
    }
  }
`;

export const SocialIcon = styled.div`
  background: #0b131a;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  opacity: 0.67;
  border-radius: 0px 20px 20px 0px;
  width: 50px;
  position: absolute;
  right: 0;
  top: 0;
  padding: 20px 0px;

  @media screen and (max-width: 768px) {
    width: 100%;
    position: relative;
    border-radius: 0px;
    height: 20px;
    flex-direction: row;
    opacity: 1;
    .icon {
      font-size: 20px;
      margin-right: 15px;
    }
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

    @media screen and (max-width: 768px) {
      font-size: 24px;
      margin-top: -15px;
    }
  }
  ${Subheading} {
    font-size: 12px;
    font-weight: 600;
    margin: 0px auto;
    max-width: 23ch;

    @media screen and (max-width: 768px) {
      margin-bottom: 5px;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 768px) {
    position: relative;
    bottom: 0;
    padding: 0px;
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
