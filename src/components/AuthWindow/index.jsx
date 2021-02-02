import React from 'react';
import PropTypes from 'prop-types';

//import styles from './styles.module.scss';

const AuthWindow = () => {
  return (
    <form>
      <p>Добро пожаловать в систему оживления сайтов!</p>
     <label htmlFor="email">Логин</label> <input type="email" /><br />
     <label htmlFor="password">Пароль</label> <input type="password" />
     <input type="submit" value="войти"/>

    </form>
  );
};

AuthWindow.propTypes = {
  children: PropTypes.node,
}

export default AuthWindow;
