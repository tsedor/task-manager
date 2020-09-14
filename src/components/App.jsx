import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Dashboard from './Dashboard/Dashboard';
import LoginForm from './LoginForm';
import Project from './Project/Project';
import { selectToken } from '../reducers/user/userActions';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #eee;
    font-family: 'Raleway', sans-serif;
  }
`;

const App = () => {
  const token = useSelector(selectToken);
  return (
    <>
      <GlobalStyle />
        <Router>
          {token === '' && <Redirect to="/login" />}
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/project/:id" component={Project} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </Router>
    </>
  )
}

export default App;