import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import NavigationLink from 'components/NavigationLink';

const AuthWindow = () => {
  return (
    <section className={styles.pageLayout}>
      <form className={styles.authWindow}>
        <h1 className={styles.greetingText}>Добро пожаловать<br />в систему оживления сайтов!</h1>
        <div className={styles.wrapInput}>
          <label id="emailField" htmlFor="email" className={styles.labelText}>Логин</label>
          <input id="emailField" type="email" className={styles.inputField}/>
        </div>
        <div className={styles.wrapInput}>
          <label id="passwordField" htmlFor="password" className={styles.labelText}>Пароль</label>
          <input id="passwordField" type="password" className={styles.inputField}/>
        </div>
        <div className={`${styles.wrapInput} ${styles.enterRegistrationField}`}>
        <button className={styles.enterButton}>Войти</button>
        <NavigationLink className={styles.registration} hrefLink="/">Регистрация</NavigationLink>
        </div>
        <NavigationLink className={styles.reg} hrefLink="/">Узнать о нас больше</NavigationLink>
      </form>
    </section>
  );
};

AuthWindow.propTypes = {
  children: PropTypes.node,
}

export default AuthWindow;
