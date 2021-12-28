import styled from 'styled-components';
import { Heading } from '../../utility/GlobalStyle';

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
