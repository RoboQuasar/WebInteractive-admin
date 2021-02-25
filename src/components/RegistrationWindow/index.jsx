import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
// import NavigationLink from 'components/NavigationLink';
import DefaultLink from 'components/DefaultLink';
const RegistrationWindow = () => {
  return (
    <div className={styles.pageLayout}>
      <form className={styles.registrationWindow}>
        <h2 className={styles.greetingText}>Добро пожаловать<br />в систему оживления сайтов!</h2>
        <p className={styles.pleaText}>Внесите данные, необходимые для создания нового аккаунта в системе.</p>


          <label className={styles.labelText}>Имя
            <input type="text" className={styles.inputField}/>
          </label>



          <label className={styles.labelText}>Фамилия
            <input type="text" className={styles.inputField}/>
          </label>



          <label className={styles.labelText}>
            <span className={styles.requiredField}>Login/email</span>
            <input  type="text" className={styles.inputField}/>
          </label>



          <label className={styles.labelText}>
            <span className={styles.requiredField}>Пароль</span>
            <input type="password" className={`${styles.inputField} ${styles.requiredField}`}/>
          </label>



          <label className={styles.labelText}>
            <span className={`${styles.requiredField} ${styles.twoLineLabel}`}>Подтверждение пароля</span>
            <input type="password" className={styles.inputField}/>
          </label>


        <div className={styles.enterRegistrationField}>
          <div className={styles.RomaYaNeHochuPosicionirovatbEtiKomponentbl4epe3Span}>
            <button className={styles.enterButton}>Регистрация</button>
            <DefaultLink hrefLink="/auth">Вход с паролем</DefaultLink>
          </div>
          <DefaultLink hrefLink="/">Узнать о нас больше</DefaultLink>
          {/* <NavigationLink className={styles.enterWithPassLink} hrefLink="/auth">Вход с паролем</NavigationLink> */}
          {/* <NavigationLink className={styles.reg} hrefLink="/">Узнать о нас больше</NavigationLink> */}
        </div>
      </form>
    </div>
  );
};

RegistrationWindow.propTypes = {
  children: PropTypes.node,
}

export default RegistrationWindow;
