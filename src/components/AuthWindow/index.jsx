import React,{useState} from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import NavigationLink from 'components/NavigationLink';

const AuthWindow = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [buttonMessage, setButtonMessage] = useState("Войти");

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
    setButtonMessage("Загрузка..");
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

    if(response.ok){
      setButtonMessage("Войти");
      setErrorMessage("Успех");
    }
    else{
     let responseJson = await response.json();
     setButtonMessage("Войти");
     setErrorMessage(responseJson.text);
    }

  }catch(err){
    setButtonMessage("Войти");
    setErrorMessage("провал на уровне мировой сети, прошу винить во всем рептилойдов");
  }
    }


  return (
    <div className={styles.pageLayout}>
      <form className={styles.authWindow} onSubmit={handleSubmit}>
        <h2 className={styles.greetingText}>Добро пожаловать<br />в систему оживления сайтов!</h2>

        <div className={styles.wrapInput}>
          <label htmlFor="emailField" className={styles.labelText}>Логин</label>
          <input id="emailField" type="text" className={styles.inputField} onChange={handleEmail}/>
        </div>

        <div className={styles.wrapInput}>
          <label htmlFor="passwordField" className={styles.labelText}>Пароль</label>
          <input id="passwordField" type="password" className={styles.inputField} onChange={handlePassword}/>
        </div>

        <p className={styles.errorMessage}>{errorMessage}</p>

        <div className={`${styles.wrapInput} ${styles.enterRegistrationField}`}>
          <button className={styles.enterButton}>{buttonMessage}</button>
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
