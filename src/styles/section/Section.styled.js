import styled from 'styled-components';
import { Title } from '../../utility';

export const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  padding: 80px 0px;
`;
export const SectionPadding = styled.div`
  padding-left: 50px;

  ${Title} {
    font-size: 70px;
    line-height: 105px;
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
`;
