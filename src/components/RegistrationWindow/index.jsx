import React, { useState } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import DefaultLink from 'components/DefaultLink';
import Question from 'components/Question';


import styles from './styles.module.scss';

const RegistrationWindow = () => {
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isNameValidError, setIsNameValidError] = useState(false);
  const [isLoginValidError, setIsLoginValidError] = useState(false);
  const [isPasswordValidError, setIsPasswordValidError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [validErrorMessage, setValidErrorMessage] = useState("");
  const [isRedirect, setIsRedirect] = useState(false);


  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleNameChange(e) {
    if (e.target.value.match("^[A-Za-zА-Яа-яЁё]*$") != null) {
      setName(capitalizeFirstLetter(e.target.value));
      setIsNameValidError(false);
    }
    else {
      setIsNameValidError(true);
      setValidErrorMessage("Имя и фамилия могут содержать только русские и латинские буквы.");
    }
  }

  function handleSecondNameChange(e) {
    if (e.target.value.match("^[A-Za-zА-Яа-яЁё]*$") != null) {
      setSecondName(capitalizeFirstLetter(e.target.value));
      setIsNameValidError(false);
    }
    else {
      setIsNameValidError(true);
      setValidErrorMessage("Имя и фамилия могут содержать только русские и латинские буквы.");
    }
  }

  function handleEmailChange(e) {
    if (e.target.value.match("^[A-Za-z_@0-9.]*$") != null) {
      setLogin(e.target.value);
      setIsLoginValidError(false);
    }
    else {
      setIsLoginValidError(true);
      setValidErrorMessage("Логин может содержать только латинские буквы, цифры, нижнее подчеркивание, точку и @");
    }
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    setIsPasswordValidError(false);
  }

  function handleConfPasswordChange(e) {
    setpasswordConfirm(e.target.value);
    setIsPasswordValidError(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name.length == 0 ||
      login.length == 0 ||
      password.length == 0 ||
      passwordConfirm.length == 0) {
      setErrorMessage("Как много пустоты: не протолкнуться. Пожалуйста, заполните все поля со звездочкой");
      return;
    }
    else {
      setErrorMessage("");
    }
    if (name.length < 2) {
      setIsNameValidError(true);
      setValidErrorMessage("Имя и фамилия должны быть не короче двух символов");
      return;
    }
    if (secondName.length != 0 && secondName.length < 2) {
      setIsNameValidError(true);
      setValidErrorMessage("Имя и фамилия должны быть не короче двух символов");
      return;
    }
    if (login.length < 2) {
      setIsLoginValidError(true);
      setValidErrorMessage("Поле логина должно быть не короче двух символов");
    }
    if (password.length < 5) {
      setIsPasswordValidError(true);
      setValidErrorMessage("Пароль должен быть не короче 5 символов");
      return;
    }
    if (password != passwordConfirm) {
      setIsPasswordValidError(true);
      setValidErrorMessage("Пароли не совпадают");
      return;
    }
    else {
      setIsLoading(true);
      setErrorMessage('');
      if (secondName.length != 0) {
        fetch(
          "http://localhost:5000/register",
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
              firstname: name,
              lastname: secondName,
              login: login,
              password: password,
              passwordConfirm: passwordConfirm
            }),
          }
        ).then((result) => {
          if (result.ok) {
            setIsRedirect(true);
          }
          else {
            return result.json();
          }
        }, (error) => {
          setErrorMessage('Было весело, но что-то пошло не так (О_о) ' + error);
        }
        ).then((data) => {
          if (data) {
            setErrorMessage(data.login);
          }
        }
        ).finally(() => {
          setIsLoading(false);
        }
        )
      }
      if (secondName.length == 0) {
        fetch(
          "http://localhost:5000/register",
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
              firstname: name,
              login: login,
              password: password,
              passwordConfirm: passwordConfirm
            }),
          }
        ).then((result) => {
          if (result.ok) {
            setIsRedirect(true);
          }
          else {
            return result.json();
          }
        }, (error) => {
          setErrorMessage('Было весело, но что-то пошло не так (О_о) ' + error);
        }
        ).then((data) => {
          if (data) {
            setErrorMessage(data.login);
          }
        }
        ).finally(() => {
          setIsLoading(false);
        }
        )
      }
    }
  }


return (
  <div className={styles.pageLayout}>
    <form className={styles.registrationWindow} onSubmit={handleSubmit}>
      <h2 className={styles.greetingText}>Добро пожаловать<br />в систему оживления сайтов!</h2>
      <p className={styles.pleaText}>Внесите данные, необходимые для создания нового аккаунта в системе.</p>


      <label className={styles.labelText}>
        <span className={styles.requiredField}>Имя</span>
        <input
          type="text"
          onChange={handleNameChange}
          value={name}
          className={styles.inputField}
          maxLength="20"
        />

        <Question
          questClass={styles.hint}
          hintMessage={"Имя и Фамилия должны быть написанны русскими или латинскими букоФФками без пробелов и знаков."}
        />
      </label>

      <label className={styles.labelText}>Фамилия
          <input
          type="text"
          onChange={handleSecondNameChange}
          value={secondName}
          className={styles.inputField}
          maxLength="20"
        />
      </label>
      {isNameValidError && <p className={styles.errorMessage}>{validErrorMessage}</p>}

      <label className={styles.labelText}>
        <span className={styles.requiredField}>Login/email</span>
        <input
          type="text"
          onChange={handleEmailChange}
          value={login}
          className={styles.inputField}
          maxLength="20"
        />

        <Question
          questClass={styles.hint}
          hintMessage={"Введите логин или email. Если логин или email занЕты, введите другой логин или email!"}
        />


      </label>
      {isLoginValidError && <p className={styles.errorMessage}>{validErrorMessage}</p>}

      <label className={`${styles.labelText} ${styles.afterTest}`}>
        <span className={styles.requiredField}>Пароль</span>
        <input
          type="password"
          onChange={handlePasswordChange}
          className={`${styles.inputField} ${styles.requiredField}`}
          maxLength="50"
        />

        <Question
          questClass={styles.hint}
          hintMessage={"Постарайтесь ввести максимально сложный пароль! Не давайте этот пароль бабушке, брату, лучшему другу или домашнему питомцу. В этом мире никому нельзя доверять =("}
        />
      </label>

      <label className={styles.labelText}>
        <span className={`${styles.requiredField} ${styles.twoLineLabel}`}>Подтверждение пароля</span>
        <input
          type="password"
          onChange={handleConfPasswordChange}
          className={styles.inputField}
          maxLength="50"
        />
      </label>

      {isPasswordValidError && <p className={styles.errorMessage}>{validErrorMessage}</p>}
      <p className={styles.errorMessage}>{errorMessage}</p>

      <div className={styles.enterRegistrationField}>
        <div className={styles.RomaYaNeHochuPosicionirovatbEtiKomponentbl4epe3Span}>
          <button className={styles.enterButton} >{isLoading ? "Загрузка..." : "Регистрация"}</button>
          <DefaultLink hrefLink="/auth">Вход с паролем</DefaultLink>
        </div>
        <DefaultLink hrefLink="/">Узнать о нас больше</DefaultLink>
      </div>
    </form>
    {isRedirect && <Redirect to="/auth" />}
  </div>
);
};

RegistrationWindow.propTypes = {
  children: PropTypes.node,
}

export default RegistrationWindow;
