import React from 'react';
import styled from 'styled-components';
import Theme from "./Themes/Theme";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Routes from './Routes/Routes';
import LoginView from './Views/LoginView/LoginView';


function App() {
  return (
    <Theme>
      <Router>
        <Switch>
          <Route exact path={Routes.main}>
            My project
          </Route>
          <Route path={Routes.login}>
              <LoginView />
          </Route>
        </Switch>
      </Router>
    </Theme>
  );
}

export default App;
