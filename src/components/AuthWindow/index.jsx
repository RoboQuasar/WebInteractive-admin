import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import NavigationLink from 'components/NavigationLink';

const AuthWindow = () => {
  return (

    <form className={styles.test}>
      <fieldset className={styles.authWindow}>
        <p>Добро пожаловать<br />в систему оживления сайтов!</p>
        <label htmlFor="email">Логин</label> <input type="email" /><br />
        <label htmlFor="password">Пароль</label> <input type="password" />
        <button>Войти</button>
        <button>Регистрация</button>
        <NavigationLink hrefLink="/">Узнать о нас больше</NavigationLink>
      </fieldset>
    </form>

  );
};

AuthWindow.propTypes = {
  children: PropTypes.node,
}

export default AuthWindow;
