import React,{useState} from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import NavigationLink from 'components/NavigationLink';
//import { stringify } from 'postcss';

const AuthWindow = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  //const [dataJson, setDataJson] = useState();

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
    response.json();
    //await response.json(); так не работает =( но мне кажется что правильно делать
    //именно так. скорее всего надо по другому обрабатывать if

    if(response.ok){
      console.log("Успех");
      setErrorMessage("Успех");
    }
    else{
      console.log("Провал на уровне ввода пароля");
      setErrorMessage("Провал на уровне ввода пароля");
    }

  }catch(err){
    console.log("Провал");
    setErrorMessage("провал на уровне мировой сети, прошу винить во всем рептилойдов");
  }
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
