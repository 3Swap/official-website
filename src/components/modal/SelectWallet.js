import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiX } from '../../utility';
import { ModalHeader, ModalClose, ModalContent, ListItem } from '../../styles/modal/Modal.styled';
import { Background, ModalWrapper, Heading } from '../../utility/GlobalStyle';
import { WalletProvider } from '../../data';
import { Button } from '../index';
import { closeConnectWalletModal } from '../../redux/toggleSlice';

const SelectWallet = () => {
  const { showWalletModal } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const handleCloseModal = e => {
    e.preventDefault();
    dispatch(closeConnectWalletModal());
  };

  return (
    <>
      {showWalletModal && (
        // console.log('yes')
        <Background onClick={handleCloseModal}>
          <ModalWrapper showModal={showWalletModal} mxWidth="sm">
            <ModalHeader>
              <Heading>Select Wallet</Heading>
              <ModalClose>
                <FiX className="icon" onClick={handleCloseModal} />
              </ModalClose>
            </ModalHeader>
            <ModalContent>
              {WalletProvider.map((provider, i) => (
                <ListItem onClick={handleCloseModal} key={i}>
                  {provider.name}
                </ListItem>
              ))}
            </ModalContent>
            <Button
              label="Cancel"
              bgColor="var(--bg-two)"
              textColor="var(--text-color)"
              hoverBg="var(--text-color)"
              hoverColor="var(--bg-one)"
              onClick={handleCloseModal}
            />
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};

export default SelectWallet;
