import styled from 'styled-components';
import { Heading } from '../../utility/GlobalStyle';
export const CountdownContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0px 20px;
  }

  .buttonwrapper {
    display: flex;
  }
`;
export const CountdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 762px;
  background: var(--bg-four);
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  padding: 20px 20px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
export const CountdownHeading = styled.div`
  ${Heading} {
    line-height: 21px;
    font-weight: bold;
    font-size: 30px;
    color: var(--text-color);
  }
  @media screen and (max-width: 768px) {
    ${Heading} {
      font-size: 20px;
    }
  }
`;
export const CountdownContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
`;
export const Timer = styled.div`
  display: flex;
  flex-direction: column;

  > span:first-child {
    font-size: 30px;
    line-height: 45px;
    color: var(--bg-two);
    font-weight: 600;
  }
  > span:last-child {
    font-size: 10px;
    color: #fff;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
`;
