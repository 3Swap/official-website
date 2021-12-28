import React, { useRef } from 'react';
import { FiX } from '../../utility';
import { ModalHeader, ModalClose, ModalContent, ListItem } from '../../styles/modal/Modal.styled';
import { Background, ModalWrapper, Heading } from '../../utility/GlobalStyle';
import { WalletProvider } from '../../data';
import { Button } from '../index';

const SelectWallet = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  return (
    <>
      {showModal && (
        // console.log('yes')
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper showModal={showModal} mxWidth="sm">
            <ModalHeader>
              <Heading>Select Wallet</Heading>
              <ModalClose>
                <FiX className="icon" onClick={() => setShowModal(prev => !prev)} />
              </ModalClose>
            </ModalHeader>
            <ModalContent>
              {WalletProvider.map((provider, i) => (
                <ListItem onClick={() => setShowModal(prev => !prev)} key={i}>
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
              onClick={() => setShowModal(prev => !prev)}
            />
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};

export default SelectWallet;
