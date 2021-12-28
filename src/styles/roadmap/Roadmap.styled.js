import styled from 'styled-components';
import { Heading, Subheading } from '../../utility/GlobalStyle';

export const RoadmapWrapper = styled.div`
  background: radial-gradient(
      49.07% 107.58% at -3.08% 104.57%,
      rgba(0, 115, 180, 0.2) 10.95%,
      rgba(0, 0, 0, 0) 100%
    ),
    radial-gradient(
      83.26% 177.91% at 113.24% -23.41%,
      #b50082 0%,
      rgba(0, 0, 0, 0) 69.34%
    );

  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  padding-bottom: 100px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const RoadmapHeader = styled.div`
  margin-bottom: 80px;
`;
export const RoadmapContainer = styled.div`
  display: flex;
  padding: 80px 0px;
  justify-content: center;
  align-items: center;
`;
export const RoadmapStage = styled.div`
  background: ${({ bg }) => bg || 'var(--bg-two)'};
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const RoadmapStageContent = styled.div`
  background: var(--bg-four);
  padding: 15px;
  width: 60px;
  height: 60px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  ${Heading} {
    font-size: 24px;
    line-height: 38px;
    font-family: 'Lora';
  }
`;
export const RoadmapContent = styled.div`
  padding: 0px 10px;
`;
export const RoadmapContentHeading = styled.div`
  padding: 10px 0px;

  ${Heading} {
    font-size: 22px;
    line-height: 28px;
    font-family: 'Lora';
  }
  ${Subheading} {
    font-size: 10px;
    color: #ccc;
  }
`;
export const RoadmapMilstone = styled.div`
  ul {
    list-style-type: circle;
  }
  li {
    font-size: 11px;
    line-height: 15px;
    padding-bottom: 5px;
    color: #ccc;
  }
`;

export const RoadmapItem = styled.div`
  width: 206px;
  height: 98px;
  border-width: 20px;
  border-style: solid;
  border-color: ${({ bg }) => bg || 'var(--bg-two)'};
  border-radius: 110px 110px 0 0;
  border-bottom: 0;
  position: relative;
  &:nth-child(odd) {
    transform: matrix(-1, 0, 0, -1, 0, 0);
    position: relative;
    left: -40px;
    ${RoadmapStage} {
      transform: translate(50%, 50px) matrix(-1, 0, 0, -1, 0, 0);
    }
    ${RoadmapContent} {
      transform: matrix(-1, 0, 0, -1, 0, 0);
      position: absolute;
      bottom: 112px;
    }
  }
  &:first-child::before {
    content: '';
    background: ${({ bg }) => bg || 'var(--bg-two)'};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    right: -20px;
    top: 70px;
  }
  &:last-child::before {
    content: '';
    background: ${({ bg }) => bg || 'var(--bg-two)'};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    left: -20px;
    top: 70px;
  }
  &:nth-child(even) {
    position: relative;
    top: -98px;
    left: -20px;
    ${RoadmapStage} {
      transform: translate(50%, 50px);
    }
    ${RoadmapContent} {
      position: absolute;
      top: 190px;
    }
  }

  &:nth-child(1) {
    left: 0;
  }
  &:nth-child(3) {
    right: 0;
  }
  &:nth-child(4) {
    left: -60px;
  }
  &:nth-child(5) {
    left: -80px;
  }
  &:nth-child(6) {
    left: -100px;
  }
  &:nth-child(7) {
    left: -120px;
  }
`;
