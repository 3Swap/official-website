import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Web3ReactProvider, createWeb3ReactRoot } from '@web3-react/core';
import Web3 from 'web3';
import GlobalStyle from './utility/GlobalStyle';
import ScrollToTop from './utility/ScrollToTop';
import store from './redux/store';

function getLibrary(provider) {
  return new Web3(provider);
}

const Web3ReactProvider2 = createWeb3ReactRoot('networkConnector');

ReactDOM.render(
  <Provider store={store}>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ReactProvider2 getLibrary={getLibrary}>
        <Router>
          <GlobalStyle />
          <ScrollToTop />
          <App />
        </Router>
      </Web3ReactProvider2>
    </Web3ReactProvider>
  </Provider>,
  document.getElementById('root')
);
