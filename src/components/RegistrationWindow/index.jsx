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
  const [hintMessage, setHintMessage] = useState("");
  const [isNameHintmessageSeen, setIsNameHintMessageSeen] = useState(false);
  const [isNameValidError, setIsNameValidError] = useState(false);
  const [isLoginHintmessageSeen, setIsLoginHintMessageSeen] = useState(false);
  const [isLoginValidError, setIsLoginValidError] = useState(false);
  const [isPasswordHintmessageSeen, setIsPasswordHintMessageSeen] = useState(false);
  const [isPasswordValidError, setIsPasswordValidError] = useState(false);
  const [validErrorMessage, setValidErrorMessage] = useState("Просто описание валидной ошибки");




  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



  function handleNameChange(e){
    if(e.target.value.match("^[A-Za-zА-Яа-яЁё]*$")!=null){
        setName(capitalizeFirstLetter(e.target.value));
        setIsNameValidError(false);
    }
    else{
      setIsNameValidError(true);
      setValidErrorMessage("Неправильное Имя");
    }
  }

  function handleSecondNameChange(e){
    if(e.target.value.match("^[A-Za-zА-Яа-яЁё]*$")!=null){
      setSecondName(capitalizeFirstLetter(e.target.value));
      setIsNameValidError(false);
    }
    else{
      setIsNameValidError(true);
      setValidErrorMessage("Неправильное имя");
    }
  }

  function handleEmailChange(e){
    if(e.target.value.match("^[A-Za-z_@0-9.]*$")!=null){
      setLogin(e.target.value);
      setIsLoginValidError(false);
    }
    else{
      setIsLoginValidError(true);
      setValidErrorMessage("Неправильный логин");
    }
  }

  function handlePasswordChange(e){
    console.log(e.target.value);
    setPassword(e.target.value);
    setIsPasswordValidError(true);
  }

  function handleConfPasswordChange(e){
    setpasswordConfirm(e.target.value);
    setIsPasswordValidError(true);
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


  function handleMouseHoverNameHint(){
    setIsNameHintMessageSeen(true);
    setHintMessage("Имя и Фамилия должны быть написанны русскими или латинскими букоФФками без пробелов и знаков");
    console.log(hintMessage);
  }

  function handleMouseHoverLoginHint(){
    setHintMessage("Введите логин или email. Если логин или email занЕты, введите другой логин или email!");
    setIsLoginHintMessageSeen(true);
    console.log(hintMessage);
  }

  function handleMouseHoverPasswordHint(){
    setIsPasswordHintMessageSeen(true);
    setHintMessage("Постарайтесь ввести максимально сложный пароль! Не давайте этот пароль бабушке, брату, лучшему другу или домашнему питомцу. В этом мире никому нельзя доверять =(");
  }

  function handleMouseLeave(){
    setIsNameHintMessageSeen(false);
    setIsLoginHintMessageSeen(false);
    setIsPasswordHintMessageSeen(false);
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
            maxLength="20"
          />
          <div
            className={styles.questionField}
            onMouseEnter={handleMouseHoverNameHint}
            onMouseLeave={handleMouseLeave}
          >
            <Question questClass={styles.hint}/>
          </div>
            {isNameHintmessageSeen && <div className={styles.questionTextField}>
              <p className={styles.questionText}>{hintMessage}</p>
            </div>}
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
          <div
            className={styles.questionField}
            onMouseEnter={handleMouseHoverLoginHint}
            onMouseLeave={handleMouseLeave}
          >
            <Question questClass={styles.hint} />
          </div>
            {isLoginHintmessageSeen&&<div className={styles.questionTextField}>
              <p className={styles.questionText}>{hintMessage}</p>
            </div>}
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
          <div
            className={styles.questionField}
            onMouseEnter={handleMouseHoverPasswordHint}
            onMouseLeave={handleMouseLeave}
          >
            <Question questClass={styles.hint}/>
          </div>
            {isPasswordHintmessageSeen && <div className={styles.questionTextField}>
              <p className={styles.questionText}>{hintMessage}</p>
            </div>}
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

        {isPasswordValidError && <p className={styles.validErrorMessage}>{validErrorMessage}</p>}
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
