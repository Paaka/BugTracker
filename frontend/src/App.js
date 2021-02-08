import React from 'react';
import Theme from "./Themes/Theme";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Routes from './Routes/Routes';
import LoginView from './Views/LoginView/LoginView';
import RegisterView from './Views/RegisterView/RegisterView';
import MainView from './Views/MainView/MainView';


function App() {
  return (
    <Theme>
      <Router>
        <Switch>
          <Route exact path={Routes.main}>
              <MainView/>
          </Route>
          <Route path={Routes.login}>
              <LoginView />
          </Route>
          <Route path={Routes.register}>
              <RegisterView />
          </Route>
        </Switch>
      </Router>
    </Theme>
  );
}

export default App;
