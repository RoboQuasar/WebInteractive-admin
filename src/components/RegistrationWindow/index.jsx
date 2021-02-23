import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import NavigationLink from 'components/NavigationLink';
//Сделать нормальные <label> Тут и в окне аутенфикации
const RegistrationWindow = () => {
  return (
    <div className={styles.pageLayout}>
      <form className={styles.registrationWindow}>
        <h2 className={styles.greetingText}>Добро пожаловать<br />в систему оживления сайтов!</h2>
        <p className={styles.pleaText}>Внесите данные, необходимые для создания нового аккаунта в системе.</p>

        <div className={styles.wrapInput}>
          <label className={styles.labelText}>Имя
            <input type="text" className={styles.inputField}/>
          </label>
        </div>

        <div className={styles.wrapInput}>
          <label className={styles.labelText}>Фамилия
            <input type="text" className={styles.inputField}/>
          </label>
         </div>

        <div className={styles.wrapInput}>
          <label className={styles.labelText}>Login/email<sup>*</sup>
            <input  type="text" className={styles.inputField}/>
          </label>
        </div>

        <div className={styles.wrapInput}>
          <label className={styles.labelText}>Пароль<sup>*</sup>
            <input type="password" className={styles.inputField}/>
          </label>
        </div>

        <div className={styles.wrapInput}>
          <label className={`${styles.labelText} ${styles.twoLineLabel}`}>Подтверждение<br/>пароля<sup>*</sup>
            <input type="password" className={styles.inputField}/>
          </label>
        </div>

        <div className={`${styles.wrapInput} ${styles.enterRegistrationField}`}>
        <button className={styles.enterButton}>Регистрация</button>
        <NavigationLink className={styles.registration} hrefLink="/auth">Вход с паролем</NavigationLink>
        </div>
        <NavigationLink className={styles.reg} hrefLink="/">Узнать о нас больше</NavigationLink>
      </form>
    </div>
  );
};

RegistrationWindow.propTypes = {
  children: PropTypes.node,
}

export default RegistrationWindow;
