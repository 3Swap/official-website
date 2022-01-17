import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import { openModal } from '../redux/toggleSlice';
import {
  CountdownContainerWrapper,
  CountdownContainer,
  CountdownWrapper,
  CountdownHeading,
  Timer
} from '../styles/countdown/Countdown.styled';
import { Heading } from '../utility/GlobalStyle';
import Button from './Button';
import abi from '../assets/contracts/InitialSaleABI.json';
import { INITIAL_SALE } from '../assets/contracts/addresses';
import { networkConnector } from '../web3/connectors';

const Countdown = () => {
  const dispatch = useDispatch();
  const web3 = useWeb3React('networkConnector');
  const [contract, setContract] = useState(null);
  const [daysLeft, setDaysLeft] = useState('0');
  const [hoursLeft, setHoursLeft] = useState('0');
  const [minutesLeft, setMinutesLeft] = useState('0');
  const [secondsLeft, setSecondsLeft] = useState('0');

  const loadTime = async () => {
    const remainingDays = await contract.methods.getTimeBeforeStart().call();
    const jsDate = new Date(Date.now() + remainingDays * 1000).getTime();
    const x = setInterval(() => {
      const now = new Date().getTime();
      const diff = jsDate - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      const daysAsString = days.toFixed(0);
      const hoursAsString = hours.toFixed(0);
      const minutesAsString = minutes.toFixed(0);
      const secondsAsString = seconds.toFixed(0);
      setDaysLeft(daysAsString);
      setHoursLeft(hoursAsString);
      setMinutesLeft(minutesAsString);
      setSecondsLeft(secondsAsString);

      if (diff < 0) {
        clearInterval(x);
        setDaysLeft('0');
        setHoursLeft('0');
        setMinutesLeft('0');
        setSecondsLeft('0');
      }
    }, 1000);
  };

  useEffect(async () => {
    if (!web3.active) {
      await web3.activate(networkConnector);
    }
  }, []);

  useEffect(() => {
    if (web3.active) {
      setContract(new web3.library.eth.Contract(abi, INITIAL_SALE));
    }
  }, [web3.active]);

  useEffect(async () => {
    if (contract) await loadTime();
  }, [contract]);

  const handleOpenModal = () => {
    dispatch(openModal());
  };
  return (
    <>
      <CountdownContainerWrapper>
        <CountdownWrapper>
          <CountdownHeading>
            <Heading>INITIAL PUBLIC SALE STARTS IN</Heading>
          </CountdownHeading>
          <CountdownContainer>
            <Timer>
              <span>{daysLeft}</span>
              <span>Days</span>
            </Timer>
            <Timer>
              <span>{hoursLeft}</span>
              <span>Hrs</span>
            </Timer>
            <Timer>
              <span>{minutesLeft}</span>
              <span>Mins</span>
            </Timer>
            <Timer>
              <span>{secondsLeft}</span>
              <span>Secs</span>
            </Timer>
          </CountdownContainer>
        </CountdownWrapper>
        <Button
          label="Buy now"
          bgColor="var(--bg-two)"
          textColor="var(--text-color)"
          hoverBg="var(--text-color)"
          hoverColor="var(--bg-one)"
          onClick={handleOpenModal}
        />
      </CountdownContainerWrapper>
    </>
  );
};

export default Countdown;
