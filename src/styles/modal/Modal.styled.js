import styled from 'styled-components';
import { Heading, Subheading } from '../../utility/GlobalStyle';

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  ${Heading} {
    font-size: 10px;
  }
`;
export const ModalClose = styled.div`
  cursor: pointer;

  .icon {
    font-size: 1.5rem;
  }
`;
export const ModalContent = styled.div`
  margin: 10px 0px;
  align-items: center;
  justify-content: center;
  text-align: center;

  .sub {
    font-size: 10px;
  }
`;
export const ListItem = styled.div`
  width: 100%;
  border: 0.138333px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  border-radius: 13.8333px;
  cursor: pointer;
  padding: 10px 0px;
  margin: 20px 0px;
  transition: all 300ms ease-out;
  &:hover {
    background: var(--bg-two);
    border: 1px solid var(--bg-two);
    transition: all 300ms ease-out;
  }

  @media screen and (max-width: 768px) {
    margin: 20px 0px;
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

export const ModalTextContent = styled.div`
  ${Heading} {
    font-size: 16px;
    text-transform: capitalize;
    margin-bottom: 10px;
  }
  ${Subheading} {
    font-size: 10px;
    max-width: 40ch;
    text-align: center;
    margin: 0px auto;
    line-height: 14px;
  }
`;
export const AdjustWrapper = styled.div`
  border: 1px solid var(--bg-four);
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 8px 0px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;

  span {
    padding: 5px 10px;

    &:hover {
      background: var(--bg-one);
      cursor: pointer;
      border-radius: 10px;
    }
    &.active {
      background: var(--bg-one);
      border-radius: 10px;
    }
  }
  div {
    font-size: 10px;
  }
`;

export const ModalAdjustContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  ${AdjustWrapper}:nth-child(2) {
    width: 80%;
    display: flex;
    margin: 0px auto;
  }
`;
