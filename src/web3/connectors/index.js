import { InjectedConnector } from '@web3-react/injected-connector';
import { NetworkConnector } from '@web3-react/network-connector';

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [56]
});

export const networkConnector = new NetworkConnector({
  urls: {
    56: 'https://bsc-dataseed.binance.org'
  }
});
