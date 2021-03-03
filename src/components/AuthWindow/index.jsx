import React,{useState} from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import NavigationLink from 'components/NavigationLink';

const AuthWindow = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isViewErrorMessage, setIsViewErrorMessage] = useState(false);

  function handleEmail(e){
    console.log(e.target.value);
    setLogin(e.target.value);
  }

  function handlePassword(e){
    console.log(e.target.value);
    setPassword(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    setIsViewErrorMessage(false);

    fetch(
      "https://web-interactive.herokuapp.com/login",
      {method:'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify({
          login:login,
          password:password
       }),
      }
    )

    .then(async response => {
      if (!response.ok) {
          console.log("Ошибка!"); //Не знаю как вывести текст ошибки. response.что-то еще?
          setIsViewErrorMessage(true);
          setErrorMessage("Тут ты ооооооочень не правильно вводишь логин или пароль, Братец");
      }
  })
  }

  return (
    <div className={styles.pageLayout}>
      <form className={styles.authWindow} onSubmit={handleSubmit}>
        <h2 className={styles.greetingText}>Добро пожаловать<br />в систему оживления сайтов!</h2>

        <div className={styles.wrapInput}>
          <label htmlFor="emailField" className={styles.labelText}>Логин</label>
          <input id="emailField" type="email" className={styles.inputField} onChange={handleEmail}/>
        </div>

        <div className={styles.wrapInput}>
          <label htmlFor="passwordField" className={styles.labelText}>Пароль</label>
          <input id="passwordField" type="password" className={styles.inputField} onChange={handlePassword}/>
        </div>

        {isViewErrorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

        <div className={`${styles.wrapInput} ${styles.enterRegistrationField}`}>
          <button className={styles.enterButton}>Войти</button>
          <NavigationLink className={styles.registration} hrefLink="/registration">Регистрация</NavigationLink>
        </div>

        <NavigationLink className={styles.reg} hrefLink="/">Узнать о нас больше</NavigationLink>
      </form>
    </div>

  );
};

AuthWindow.propTypes = {
  children: PropTypes.node,
}

export default AuthWindow;
