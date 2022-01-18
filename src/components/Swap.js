import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineLink } from 'react-icons/ai';

import { SwapContainer, Swapdemo, SwapHeader, SwapWrapper, SwapFromWrapper } from '../styles/swap/Swap.styled';
import Button from './Button';
import Input from './InputField';
import SelectSwapToken from './swap/SelectSwapToken';
import { ThreeSwap } from '../assets';
import { NavLink } from '../utility/GlobalStyle';

const SwapTokenDemo = () => {
  const [amountToken1, setAmountToken1] = useState(0);
  const [amountToken2, setAmountToken2] = useState(0);

  return (
    <>
      <SwapWrapper>
        <SwapHeader>
          <div className="logo">
            <NavLink to="/">
              <img src={ThreeSwap} alt="logo" />
            </NavLink>
          </div>
          <div className="connectWallet">
            <Button
              label="connect wallet"
              bgColor="var(--bg-primary-light)"
              textColor="#fff"
              hoverBg="var(--bg-primary)"
              hoverColor="#fff"
            />
          </div>
        </SwapHeader>
        <Swapdemo>
          <div className="wrapper">
            <SwapContainer>
              <div className="swap__heading">
                <h1>Swap</h1>
              </div>
              <SwapFromWrapper>
                <div className="swap_token_from">
                  <div className="form__heading">
                    <h3>From</h3>
                    <h3>
                      Balance: 0 USDT <span>Max</span>
                    </h3>
                  </div>
                  <div className="form__input">
                    <div className="swap_select">
                      <SelectSwapToken />
                    </div>
                    <div className="swap_input">
                      <Input
                        type="text"
                        placeholder="0.0"
                        value={amountToken1}
                        onChange={e => setAmountToken1(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="swap_token_from">
                  <div className="form__heading">
                    <h3>&nbsp;</h3>
                    <h3>
                      Balance: 0 USDT <span>Max</span>
                    </h3>
                  </div>
                  <div className="form__input">
                    <div className="swap_select">
                      <SelectSwapToken />
                    </div>
                    <div className="swap_input">
                      <Input
                        type="text"
                        placeholder="0.0"
                        value={amountToken2}
                        onChange={e => setAmountToken2(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="divider">
                  <AiOutlineLink className="swapIcon" />
                </div>
                <div className="swap_token_from swap_to_token">
                  <h1>To</h1>
                  <div className="form__input">
                    <div className="swap_select">
                      <SelectSwapToken />
                    </div>
                  </div>
                </div>
                <div className="swap__button">
                  <Button
                    label="Swap"
                    bgColor="var(--bg-primary-light)"
                    textColor="#ccc"
                    hoverBg="var(--bg-primary)"
                    hoverColor="#121212"
                  />
                </div>
              </SwapFromWrapper>
            </SwapContainer>
          </div>
          <div className="swap__demo__setting">
            <FiSettings className="icon" />
          </div>
        </Swapdemo>
      </SwapWrapper>
    </>
  );
};

export default SwapTokenDemo;
