import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Raleway', sans-serif;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Router>
          App
        </Router>
      </Provider>
    </>
  )
}

export default App;