import React,{useState} from 'react';
import PropTypes from 'prop-types';
import DefaultLink from 'components/DefaultLink';

import styles from './styles.module.scss';


const RegistrationWindow = () => {
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isViewLoadingMessage, setIsViewLoadingMessage] = useState(false);
  const [isViewErrorMessage, setIsViewErrorMessage] = useState(false);

 // const [buttonIsDisable, setButtonIsDisable] = useState(true);



  function handleNameChange(e){

    console.log(e.target.value);
    console.log(e.target.value.length);
    //console.log(typeof(Name));
    setName(e.target.value);
    //if (e.target.value.length >= 2){
      //console.log("Проверка прошла успешно");
      //setNameValid(true);
    //}

  }

  function handleSecondNameChange(e){
    console.log(e.target.value);
    setSecondName(e.target.value);
  }

  function handleEmailChange(e){
    console.log(e.target.value);
    setLogin(e.target.value);
  }

  function handlePasswordChange(e){
    console.log(e.target.value);
    setPassword(e.target.value);
  }

  function handleConfPasswordChange(e){
    //console.log(e.target.value);
    setpasswordConfirm(e.target.value);
  }

  function validationCheck(){
    //return name < 2;
    if (name.length >= 2 && password.length >= 5 && password == passwordConfirm){
      return false;
    }
    else {
      console.log("УСЛОВИЕ не сработало");

      if (name.length >= 2){
        console.log("Валидация имени пройденна");
      }
      if (password.length >= 5){
        console.log("Валидация Пароля пройденна");
      }
      if (password == passwordConfirm){
        console.log("проверка пароля пройденна");
      }
      return true;
    }
  }

 function handleSubmit(e){
    e.preventDefault();
    setIsViewLoadingMessage(true);
    //let response = await fetch;

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
    )

    .then(async response => {
      setIsViewLoadingMessage(false);
      if (!response.ok) {
          console.log("Ошибка!"); //Не знаю как вывести текст ошибки. response.что-то еще?
          setIsViewErrorMessage(true);
          setErrorMessage("Тут ты ооооооочень не прав, Братец");
      }
  })
  }

  return (
    <div className={styles.pageLayout}>
      <form className={styles.registrationWindow} onSubmit={handleSubmit}>
        <h2 className={styles.greetingText}>Добро пожаловать<br />в систему оживления сайтов!</h2>
        <p className={styles.pleaText}>Внесите данные, необходимые для создания нового аккаунта в системе.</p>


          <label className={styles.labelText}>Имя
            <input type="text" onChange={handleNameChange} className={styles.inputField}/>
          </label>



          <label className={styles.labelText}>Фамилия
            <input type="text" onChange={handleSecondNameChange} className={styles.inputField}/>
          </label>



          <label className={styles.labelText}>
            <span className={styles.requiredField}>Login/email</span>
            <input  type="text" onChange={handleEmailChange} className={styles.inputField}/>
          </label>



          <label className={styles.labelText}>
            <span className={styles.requiredField}>Пароль</span>
            <input type="password" onChange={handlePasswordChange} className={`${styles.inputField} ${styles.requiredField}`}/>
          </label>



          <label className={styles.labelText}>
            <span className={`${styles.requiredField} ${styles.twoLineLabel}`}>Подтверждение пароля</span>
            <input type="password" onChange={handleConfPasswordChange} className={styles.inputField}/>
          </label>

          {isViewErrorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        {/* {///////////////////////////////////////////////////////////////////////////////////} */}
          {isViewLoadingMessage && <p className={styles.loadingMessage}>Загрузочка...</p>}
      {/*Мне не очень нравится такой подход. Мне кажеться должен быть способ отслеживания загрузки через .then*/}

        <div className={styles.enterRegistrationField}>
          <div className={styles.RomaYaNeHochuPosicionirovatbEtiKomponentbl4epe3Span}>
            <button disabled={validationCheck()} className={styles.enterButton} >Регистрация</button>
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
