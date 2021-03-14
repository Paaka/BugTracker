import React from 'react';
import {Provider} from 'react-redux';
import Theme from "./Themes/Theme";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Routes from './Routes/Routes';
import LoginView from './Views/LoginView/LoginView';
import RegisterView from './Views/RegisterView/RegisterView';
import MainView from './Views/MainView/MainView';
import ProjectsView from './Views/ProjectsView/ProjectsView';
import store from './Store/Store';
import CreateProjectView from './Views/CreateProjectView/CreateProjectView';
import ProjectView from './Views/ProjectView/ProjectView';
import CreateNotificationView from './Views/CreateNotificationView/CreateNotificationView';


function App() {
  return (
    <Provider store={store}>
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
            <Route path={Routes.projects}>
                <ProjectsView />
            </Route>
            <Route path={Routes.create.newProject}>
                <CreateProjectView />
            </Route>
            <Route path={Routes.projectWithUndefinedId}>
                <ProjectView />
            </Route>
            <Route exact path={Routes.create.newNotification}>
                <CreateNotificationView/>
            </Route>
          </Switch>
        </Router>
      </Theme>
    </Provider>
  );
}

export default App;
