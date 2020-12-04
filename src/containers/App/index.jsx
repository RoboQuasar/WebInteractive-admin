import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import AuthPage from 'pages/AuthPage';
import MainPage from 'pages/MainPage';
import ProfilePage from 'pages/ProfilePage';
ergsdgbsg;
import styles from './styles.module.scss';

function App() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>Лолала</div>
      <Router>
        <Switch>
          <Route path="/auth">
            <AuthPage />
          </Route>

          <Route path="/main">
            <MainPage />
          </Route>

          <Route path="/profile">
            <ProfilePage />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
