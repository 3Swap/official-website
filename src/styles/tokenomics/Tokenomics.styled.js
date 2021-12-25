import styled from 'styled-components';
import { Title } from '../../utility';
import { Column } from '../../utility/GlobalStyle';

export const TokenomicsContainer = styled.div`
  display: flex;

  flex-direction: column;

  ${Title} {
    font-size: 40px;
    line-height: 60px;
    text-align: center;
  }

  ${Column} {
    margin-right: 20px;
  }
`;

export const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* background: green; */
  width: 48%;
  margin-right: 10px;
  height: 100%;
  background: url(${({ bg }) => bg || ''}) no-repeat;

  background-size: 50%;

  &:last-child {
    background-position-x: 65%;
    background-position-y: 100%;
    background-size: 35%;
    margin-top: 50px;
    /* transform: rotate(28.22deg); */

    /* .legend {
      transform: rotate(360deg);
    } */
  }

  &:first-child {
    img {
      width: 200px;
      height: 200px;
      object-fit: contain;
      margin-left: 80px;
      margin-top: 80px;
    }
  }
`;

export const Legend = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
export const LegendColor = styled.div`
  background: ${({ color }) => color || ''};
  width: 30.75px;
  height: 30.75px;
  border-radius: 5px;
  margin-right: 10px;
`;
export const LegendText = styled.div`
  font-size: 24px;
  font-weight: normal;
  line-height: 39px;
`;
