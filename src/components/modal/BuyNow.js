import React, { useState, useEffect } from 'react';
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
import { useWeb3React } from '@web3-react/core';
import abi from '../../assets/contracts/SeedSaleABI.json';
import { SEED_SALE } from '../../assets/contracts/addresses';
import Swal from 'sweetalert2';

const BuyNow = () => {
  const { showModal } = useSelector(state => state.modal);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('0');
  const [usdValue, setUsdValue] = useState(0);
  const web3 = useWeb3React();
  const [contract, setContract] = useState(null);
  const [rate, setRate] = useState(0);

  const getRate = async () => {
    const _rate = await contract.methods.getRate().call();
    setRate(_rate);
  };

  const initiateBuy = async () => {
    try {
      const _sent = await contract.methods.buyAndVest().send({
        from: web3.account ? web3.account : '',
        value: web3.library.utils.toWei((parseFloat(amount || '0') / usdValue).toFixed(4)),
        gas: web3.library.utils.toWei('0.00003', 'gwei')
      });
      Swal.fire({
        title: 'Transaction Successful',
        html: `Transaction executed. <a href="https://bscscan.com/tx/${_sent.transactionHash}">View on explorer</a>`,
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } catch (error) {
      console.log(error);
      // alert(error.message);
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  useEffect(async () => {
    if (contract) {
      await getRate();
    }
  }, [contract]);

  useEffect(() => {
    if (web3.active) {
      setContract(new web3.library.eth.Contract(abi, SEED_SALE));
    }
  }, [web3.active]);

  useEffect(async () => {
    const _valueResponse = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd'
    );
    const _valAsJson = await _valueResponse.json();
    setUsdValue(_valAsJson['binancecoin']['usd']);
  }, []);

  const handleCloseModal = () => {
    dispatch(closeModal());
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
                min="0"
                onChange={e => setAmount(e.target.value.slice(0, 10))}
                value={amount}
                name="amount"
                autoComplete="off"
              />
            </ModalContent>
            <ModalPriceDetails>
              <Column>
                <Heading>Amount (BNB):</Heading>
                <Heading>{(parseFloat(amount || '0') / usdValue).toFixed(4)}</Heading>
              </Column>
              <Column>
                <Heading>Amount to receive (SAP):</Heading>
                <Heading>
                  {isNaN(parseFloat(amount || '0') / usdValue / (rate / 10 ** 18))
                    ? 'Connect wallet to get rate'
                    : (parseFloat(amount || '0') / usdValue / (rate / 10 ** 18)).toFixed(4)}
                </Heading>
              </Column>
            </ModalPriceDetails>
            <Button
              label="Buy Now"
              bgColor="var(--bg-two)"
              textColor="var(--text-color)"
              hoverBg="var(--text-color)"
              hoverColor="var(--bg-one)"
              onClick={initiateBuy}
            />
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};

export default BuyNow;
