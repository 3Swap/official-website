import React from 'react';
import { useDispatch } from 'react-redux';
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

const Countdown = () => {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal());
  };
  return (
    <>
      <CountdownContainerWrapper>
        <CountdownWrapper>
          <CountdownHeading>
            <Heading>ICO STARTS IN</Heading>
          </CountdownHeading>
          <CountdownContainer>
            <Timer>
              <span>20</span>
              <span>Days</span>
            </Timer>
            <Timer>
              <span>15</span>
              <span>Hrs</span>
            </Timer>
            <Timer>
              <span>04</span>
              <span>Mins</span>
            </Timer>
            <Timer>
              <span>45</span>
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
