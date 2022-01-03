import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiX } from '../../utility';
import {
  ModalHeader,
  ModalClose,
  ModalContent,
  ModalContentHeading,
  ModalPriceDetails
} from '../../styles/modal/Modal.styled';
import { Background, ModalWrapper, Heading, Column } from '../../utility/GlobalStyle';
import { Button, Input } from '../index';
import { closeModal } from '../../redux/toggleSlice';

const BuyNow = () => {
  const { showModal } = useSelector(state => state.modal);
  const { userInfo } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleConnectWallet = e => {
    e.preventDefault();
    // dispatch connect wallet function
    alert('Connect Wallet');
  };
  const handleBuyToken = e => {
    e.preventDefault();
    // dispatch buy token function
    alert(`Buy Token worth of ${amount} USD`);
  };
  return (
    <>
      {showModal && (
        // console.log('yes')
        <Background>
          <ModalWrapper showModal={showModal} mxWidth="sm">
            <ModalHeader>
              <Heading>&nbsp;</Heading>
              <ModalClose>
                <FiX className="icon" onClick={handleCloseModal} />
              </ModalClose>
            </ModalHeader>
            <ModalContent>
              <ModalContentHeading>
                <Heading>Enter Amount (USD)</Heading>
              </ModalContentHeading>
              <Input
                type="number"
                placeholder="Enter Amount"
                onChange={e => setAmount(e.target.value.slice(0, 10))}
                value={amount}
                name="amount"
              />
            </ModalContent>
            <ModalPriceDetails>
              <Column>
                <Heading>Transaction Amount (USD):</Heading>
                <Heading>0.0</Heading>
              </Column>
              <Column>
                <Heading>Amount to receive:</Heading>
                <Heading>0.0</Heading>
              </Column>
            </ModalPriceDetails>
            <Button
              label={!userInfo.name ? 'Connect Wallet' : 'Buy Now'}
              bgColor="var(--bg-two)"
              textColor="var(--text-color)"
              hoverBg="var(--text-color)"
              hoverColor="var(--bg-one)"
              onClick={!userInfo.name ? handleConnectWallet : handleBuyToken}
            />
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};

export default BuyNow;
