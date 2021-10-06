import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import NavigationLink from 'components/NavigationLink';
import DefaultLink from 'components/DefaultLink';

 import UserLoginInfoContext from 'react_context/UserLoginInfoContext';


const AuthWindow = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [isLogged, setIsLogged] = useContext(UserLoginInfoContext);

  function handleEmail(e) {
    setLogin(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:5000/login",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          credentials: 'include',
          body: JSON.stringify({
            login: login,
            password: password
          }),
        }
      );

      if (response.ok) {
        setIsLogged(true);
      }
      else {
        let responseJson = await response.json();
        setErrorMessage(responseJson.text);
      }

    } catch (err) {
      setErrorMessage("провал на уровне мировой сети, прошу винить во всем рептилойдов");
    } finally {
      setIsLoading(false);
    }
  }


  return (

      <div className={styles.pageLayout}>
        <form className={styles.authWindow} onSubmit={handleSubmit}>
          <h2 className={styles.greetingText}>Добро пожаловать<br />в систему оживления сайтов!</h2>

          <div className={styles.wrapInput}>
            <label htmlFor="emailField" className={styles.labelText}>Логин</label>
            <input id="emailField" type="text" className={styles.inputField} onChange={handleEmail} />
          </div>

          <div className={styles.wrapInput}>
            <label htmlFor="passwordField" className={styles.labelText}>Пароль</label>
            <input id="passwordField" type="password" className={styles.inputField} onChange={handlePassword} />
          </div>

          <p className={styles.errorMessage}>{errorMessage}</p>

          <div className={`${styles.wrapInput} ${styles.enterRegistrationField}`}>
            <button disabled={(login.length >= 2 && password.length >= 5) ? false : true} className={styles.enterButton}>{isLoading ? "Загрузка..." : "Войти"} </button>
            <DefaultLink hrefLink="/registration">Регистрация</DefaultLink>
          </div>

          <NavigationLink className={styles.reg} hrefLink="/">Узнать о нас больше</NavigationLink>
          {isLogged && <Redirect to="/main" />}
        </form>
      </div>

  );
};

AuthWindow.propTypes = {
  children: PropTypes.node,
}

export default AuthWindow;
