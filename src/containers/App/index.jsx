import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AuthPage from 'pages/AuthPage';
import MainPage from 'pages/MainPage';
import ProfilePage from 'pages/ProfilePage';
import WidgetsPage from 'pages/WidgetsPage';
import ElementsPage from "pages/ElementsPage";
import EffectsPage from "pages/EffectsPage";
import StatPage from "pages/StatPage";
import HelpPage from "pages/HelpPage";
import ModelsPage from "pages/ModelsPage";
import RegistrationPage from "pages/RegistrationPage"

import styles from './styles.module.scss';
import UserLoginInfoContext from "react_context/UserLoginInfoContext";
// import {userLoginInfo} from "../../react_context/UserLoginInfoContext"



function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <main className={styles.main}>
      <UserLoginInfoContext.Provider value = {[isLogged, setIsLogged]}>
      <Router>
        <Switch>
          <Route exact path="/auth">
            <AuthPage />
          </Route>

          <Route path="/main">
            <MainPage />
          </Route>

          <Route path="/profile">
            <ProfilePage />
          </Route>

          <Route path="/widgets">
            <WidgetsPage />
          </Route>

          <Route path="/elements">
            <ElementsPage />
          </Route>

          <Route path="/effects">
            <EffectsPage />
          </Route>

          <Route path="/stat">
            <StatPage />
          </Route>

          <Route path="/help">
            <HelpPage />
          </Route>

          <Route path="/models">
            <ModelsPage />
          </Route>

          <Route path="/registration">
            <RegistrationPage />
          </Route>

        </Switch>
      </Router>
      </UserLoginInfoContext.Provider>
    </main>
  );
}

export default App;
