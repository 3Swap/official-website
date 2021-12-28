import styled from 'styled-components';
import { Heading, Title, Subheading, Column } from '../../utility/GlobalStyle';
import { SectionImageWrapper } from '../section/Section.styled';
export const Box = styled.div`
  width: 80px;
  height: 80px;
  background: url(${({ bg }) => bg || 'green'}) no-repeat;
  background-size: contain;
`;

export const AboutWrapper = styled.div`
  width: 100%;
  background: #fff;
  height: 100%;
  color: #000;

  ${Heading} {
    font-size: 25px;
    line-height: 37px;
    padding-left: 8px;
  }
  ${Column} {
    &:first-child {
      padding-left: 50px;
      @media screen and (max-width: 768px) {
        padding: 0px 20px;

        button {
          width: 100%;
          font-size: 16px;
          font-weight: 600;
          padding: 15px 25px;
        }
      }
    }
    &:last-child {
      position: relative;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
  ${Box} {
    &:nth-child(2) {
      position: absolute;
      top: -70px;
      right: 100px;
      @media screen and (max-width: 768px) {
        top: 0;
        right: -10px;
      }
    }
    &:nth-child(3) {
      position: absolute;
      bottom: -10px;
      left: 80px;
    }
    &:nth-child(4) {
      position: absolute;
      bottom: -15px;
      right: 100px;
    }
  }
  ${Title} {
    font-size: 70px;
    line-height: 105px;
    text-shadow: 2px 7px 10px rgba(11, 19, 25, 0.2);
    @media screen and (max-width: 768px) {
      font-size: 80px;
    }
  }
  ${Subheading} {
    font-size: 14px;
    line-height: 21px;
    color: var(--bg-one);
    margin-bottom: 5px;
    padding-left: 8px;
    font-style: normal;

    @media screen and (max-width: 768px) {
      line-height: 25px;
    }
  }
  ${SectionImageWrapper} {
    background-position-y: -25%;
    background-position-x: 15%;

    img {
      width: 100%;
      height: 300px;
      object-fit: contain;
      margin-top: 0px;
      filter: drop-shadow(2px 7px 10px rgba(11, 19, 25, 0.2));
    }
    @media screen and (max-width: 768px) {
      padding: 40px 0px;
      background-position-y: -10%;
      background-position-x: -80%;
    }
  }
`;

export const BrandContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0px auto;
  max-width: 1000px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  background: #ffffff;
  padding: 15px 0px;
  box-shadow: 2px 7px 5px rgba(11, 19, 25, 0.05);
  border-radius: 20px;
  img {
    margin: 0px 20px;
  }
`;
