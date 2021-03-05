import React,{useState} from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import NavigationLink from 'components/NavigationLink';

const AuthWindow = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleEmail(e){
    console.log(e.target.value);
    setLogin(e.target.value);
  }

  function handlePassword(e){
    console.log(e.target.value);
    setPassword(e.target.value);
  }

  async function handleSubmit(e){
    e.preventDefault();
    try{
    const response = await fetch(
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
    );
    //let response_json = await response.json();
    setErrorMessage("Вродь вышло" + response.text);
    console.log(response);
    console.log(response.text);
  }
  catch(err){
    console.log("Пизнец!!", err);
    setErrorMessage("Писос! не вышло! ");
  }
    // if(response.ok){
    //   console.log("Получилось!");
    // }
    // let response_json = await response.json();
    // //console.log(response_json);
    // if (response_json.ok) {
    //   console.log("Ошибка! неправильный логин или пароль!" );
    //   setErrorMessage("Ошибка! "+ response_json.text );
    // }
    // else{
    //   //let response_json = await response.json();
    //   console.log("Проверка логина и пароля прошла успешно!");
    //   setErrorMessage("Отлично! response говорит " + response_json.text);
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

        <p className={styles.errorMessage}>{errorMessage}</p>

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
