import React from 'react';
import {
  CountdownContainerWrapper,
  CountdownContainer,
  CountdownWrapper,
  CountdownHeading,
  Timer,
} from '../styles/countdown/Countdown.styled';
import { Button, Heading } from '../utility/GlobalStyle';

const Countdown = () => {
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
              <span>20</span>
              <span>Days</span>
            </Timer>
            <Timer>
              <span>20</span>
              <span>Days</span>
            </Timer>
            <Timer>
              <span>20</span>
              <span>Days</span>
            </Timer>
          </CountdownContainer>
        </CountdownWrapper>
        <Button label="Buy now" />
      </CountdownContainerWrapper>
    </>
  );
};

export default Countdown;
