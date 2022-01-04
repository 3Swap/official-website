import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiX } from '../../utility';
import {
  ModalHeader,
  ModalClose,
  ModalContent,
  ModalTextContent,
  ModalAdjustContainer,
  AdjustWrapper
} from '../../styles/modal/Modal.styled';
import { Background, ModalWrapper, Heading, Subheading } from '../../utility/GlobalStyle';
import { closeModal } from '../../redux/toggleSlice';

const CoinSetting = () => {
  const { showModal } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {showModal && (
        // console.log('yes')
        <Background onClick={handleCloseModal}>
          <ModalWrapper showSetting={showModal} mxWidth="sm">
            <ModalHeader>
              <Heading>&nbsp;</Heading>
              <ModalClose>
                <FiX className="icon" onClick={handleCloseModal} />
              </ModalClose>
            </ModalHeader>
            <ModalContent>
              <ModalTextContent>
                <Heading as="h1" bold>
                  Adjust slippage tolerance
                </Heading>
                <Subheading>Slippage is the price difference between original and executed order. More info</Subheading>
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
