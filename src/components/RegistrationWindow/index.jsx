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
  const [validErrorMessage, setValidErrorMessage] = useState("");


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
      setValidErrorMessage("Имя и фамилия могут содержать только русские и латинские буквы.");
    }
  }

  function handleSecondNameChange(e){
    if(e.target.value.match("^[A-Za-zА-Яа-яЁё]*$")!=null){
      setSecondName(capitalizeFirstLetter(e.target.value));
      setIsNameValidError(false);
    }
    else{
      setIsNameValidError(true);
      setValidErrorMessage("Имя и фамилия могут содержать только русские и латинские буквы.");
    }
  }

  function handleEmailChange(e){
    if(e.target.value.match("^[A-Za-z_@0-9.]*$")!=null){
      setLogin(e.target.value);
      setIsLoginValidError(false);
    }
    else{
      setIsLoginValidError(true);
      setValidErrorMessage("Логин может содержать только латинские буквы, цифры, нижнее подчеркивание, точку и @");
    }
  }

  function handlePasswordChange(e){
    setPassword(e.target.value);
    setIsPasswordValidError(false);
  }

  function handleConfPasswordChange(e){
    setpasswordConfirm(e.target.value);
    setIsPasswordValidError(false);
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
    if(name.length == 0 ||
      secondName.length == 0 ||
      login.length == 0 ||
      password.length == 0 ||
      passwordConfirm.length == 0)
      {
        setErrorMessage("Как много пустоты: не протолкнуться. Пожалуйста, заполните все поля");
        return;
      }
      else{
        setErrorMessage("");
      }
    if(name.length < 2 || secondName.length < 2){
      setIsNameValidError(true);
      setValidErrorMessage("Имя и фамилия должны быть не меньше двух символов");
      return;
    }
    if(password.length < 5){
      setIsPasswordValidError(true);
      setValidErrorMessage("Пароль должен быть не меньше 5 символов");
      return;
    }
    if(password != passwordConfirm){
      setIsPasswordValidError(true);
      setValidErrorMessage("Пароли не совпадают");
      return;
    }
    else{
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

        {isPasswordValidError && <p className={styles.errorMessage}>{validErrorMessage}</p>}
        <p className={styles.errorMessage}>{errorMessage}</p>

        <div className={styles.enterRegistrationField}>
          <div className={styles.RomaYaNeHochuPosicionirovatbEtiKomponentbl4epe3Span}>
            <button  className={styles.enterButton} >{enterButtonText}</button>
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
