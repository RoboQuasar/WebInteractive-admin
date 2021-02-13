import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import NavigationLink from 'components/NavigationLink';

const AuthWindow = () => {
  return (
    <section className={styles.pageLayout}>
      <form className={styles.authWindow}>
        <p className={styles.greetingText}>Добро пожаловать<br />в систему оживления сайтов!</p>
        <div className={styles.wrapInput}>
          <label htmlFor="email" className={styles.labelText}>Логин</label>
          <input type="email" className={styles.inputField}/>
        </div>
        <div className={styles.wrapInput}>
          <label htmlFor="password" className={styles.labelText}>Пароль</label>
          <input type="password" className={styles.inputField}/>
        </div>
        <button>Войти</button>
        <NavigationLink hrefLink="/">Регистрация</NavigationLink>
        <NavigationLink hrefLink="/">Узнать о нас больше</NavigationLink>
      </form>
    </section>
  );
};

AuthWindow.propTypes = {
  children: PropTypes.node,
}

export default AuthWindow;
