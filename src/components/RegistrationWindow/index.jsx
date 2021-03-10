import React,{useState} from 'react';
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
  const [enterButtonText, setEnterButtonText] = useState("Регистрация");
  const [hoverQuest, setHoverQuest] = useState("Не навел");

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



  function handleNameChange(e){
    if(e.target.value.match("^[A-Za-zА-Яа-яЁё]*$")!=null){
        setName(capitalizeFirstLetter(e.target.value));
    }
  }

  function handleSecondNameChange(e){
    if(e.target.value.match("^[A-Za-zА-Яа-яЁё]*$")!=null){
      setSecondName(capitalizeFirstLetter(e.target.value));
    }
  }

  function handleEmailChange(e){
    if(e.target.value.match("[A-Za-z]")!=null){
      setLogin(e.target.value);
    }
  }

  function handlePasswordChange(e){
    console.log(e.target.value);
    setPassword(e.target.value);
  }

  function handleConfPasswordChange(e){
    setpasswordConfirm(e.target.value);
  }

  function validationCheck(){
    if (name.length >= 2 && password.length >= 5 && password == passwordConfirm){
      return false;
    }
    else {
      //console.log("УСЛОВИЕ не сработало");

      if (name.length >= 2){
        //console.log("Валидация имени пройденна");
      }
      if (password.length >= 5){
        //console.log("Валидация Пароля пройденна");
      }
      if (password == passwordConfirm){
        //console.log("проверка пароля пройденна");
      }
      return true;
    }
  }

  //Ниче не могу сделать со знаком вопроса((
  function handleMouseHover(){
    setHoverQuest("Навел");
    console.log(hoverQuest);
    setHoverQuest("Не навел");
  }

 function handleSubmit(e){
    e.preventDefault();
    setEnterButtonText("Загрузочка");
    setErrorMessage('');
    fetch(
      "https://web-interactive.herokuapp.com/register",
      {method:'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify({
          firstname:name,
          lastname:secondName,
          login:login,
          password:password,
          passwordConfirm:passwordConfirm
       }),
      }
    ).then((result) => {
      if(result.ok){
        setErrorMessage('Вы успешно зарегистрированны');
        setEnterButtonText("Регистрация");
      }
      return result.json();
    },(error) => {
      console.log("Ошибка", error);
      setErrorMessage('Было весело, но что-то пошло не так (О_о)');
      setEnterButtonText("Регистрация");
      }
      ).then((data) => {
        console.log("Получаем данные promise", data.login);
        setErrorMessage(data.login);
        setEnterButtonText("Регистрация");
      })
    }

  return (
    <div className={styles.pageLayout}>
      <form className={styles.registrationWindow} onSubmit={handleSubmit}>
        <h2 className={styles.greetingText}>Добро пожаловать<br />в систему оживления сайтов!</h2>
        <p className={styles.pleaText}>Внесите данные, необходимые для создания нового аккаунта в системе.</p>


        <label className={styles.labelText}>Имя
          <input
            type="text"
            onChange={handleNameChange}
            value={name}
            className={styles.inputField}
            maxLength="20"/>
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



        <label className={styles.labelText}>
          <span className={styles.requiredField}>Login/email</span>
          <input
            type="text"
            onChange={handleEmailChange}
            value={login}
            className={styles.inputField}
            maxLength="20"
          />
        </label>



        <label className={`${styles.labelText} ${styles.afterTest}`}>
          <span className={styles.requiredField}>Пароль</span>
          <input
            type="password"
            onChange={handlePasswordChange}
            className={`${styles.inputField} ${styles.requiredField}`}
            maxLength="50"
          />

            <Question questClass={styles.hint} onCkick={handleMouseHover} onMouseEnter={handleMouseHover}/>

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

        <p className={styles.errorMessage}>{errorMessage}</p>

        <div className={styles.enterRegistrationField}>
          <div className={styles.RomaYaNeHochuPosicionirovatbEtiKomponentbl4epe3Span}>
            <button disabled={validationCheck()} className={styles.enterButton} >{enterButtonText}</button>
            <DefaultLink hrefLink="/auth">Вход с паролем</DefaultLink>
          </div>
          <DefaultLink hrefLink="/">Узнать о нас больше</DefaultLink>
        </div>
      </form>
    </div>
  );
};

RegistrationWindow.propTypes = {
  children: PropTypes.node,
}

export default RegistrationWindow;
