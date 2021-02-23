import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
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




function App() {
  return (
    <main className={styles.main}>
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
    </main>
  );
}

export default App;
