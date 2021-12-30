import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './utility/GlobalStyle';
import ScrollToTop from './utility/ScrollToTop';

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById('root')
);
