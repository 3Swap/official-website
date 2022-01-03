import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './utility/GlobalStyle';
import ScrollToTop from './utility/ScrollToTop';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
