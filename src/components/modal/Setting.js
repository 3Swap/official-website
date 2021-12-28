import React, { useRef } from 'react';
import { FiX } from '../../utility';
import {
  ModalHeader,
  ModalClose,
  ModalContent,
  ModalTextContent,
  ModalAdjustContainer,
  AdjustWrapper,
} from '../../styles/modal/Modal.styled';
import {
  Background,
  ModalWrapper,
  Heading,
  Subheading,
} from '../../utility/GlobalStyle';

const CoinSetting = ({ showSetting, setShowSetting }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowSetting(false);
    }
  };
  return (
    <>
      {showSetting && (
        // console.log('yes')
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper showSetting={showSetting} mxWidth="sm">
            <ModalHeader>
              <Heading>&nbsp;</Heading>
              <ModalClose>
                <FiX
                  className="icon"
                  onClick={() => setShowSetting((prev) => !prev)}
                />
              </ModalClose>
            </ModalHeader>
            <ModalContent>
              <ModalTextContent>
                <Heading as="h1" bold>
                  Adjust slippage tolerance
                </Heading>
                <Subheading>
                  Slippage is the price difference between original and executed
                  order. More info
                </Subheading>
              </ModalTextContent>
              <ModalAdjustContainer>
                <AdjustWrapper>
                  <span>0.5%</span>
                  <span>1%</span>
                  <span className="active">2%</span>
                  <span>5%</span>
                  <span>10%</span>
                </AdjustWrapper>
                <AdjustWrapper>
                  <div>Price Chart</div>
                  <span className="active">Show</span>
                  <span>Hide</span>
                </AdjustWrapper>
              </ModalAdjustContainer>
              <Subheading className="sub">View open order account</Subheading>
            </ModalContent>
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};

export default CoinSetting;
