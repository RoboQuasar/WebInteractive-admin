import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import NavigationLink from 'components/NavigationLink';
//Сделать нормальные <label> Тут и в окне аутенфикации
const RegistrationWindow = () => {
  return (
    <div className={styles.pageLayout}>
      <div className={styles.registrationWindow}>
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
          <label className={styles.labelText}>
            <span className={styles.requiredField}>Login/email</span>
            <input  type="text" className={styles.inputField}/>
          </label>
        </div>

        <div className={styles.wrapInput}>
          <label className={styles.labelText}>
            <span className={styles.requiredField}>Пароль</span>
            <input type="password" className={`${styles.inputField} ${styles.requiredField}`}/>
          </label>
        </div>

        <div className={styles.wrapInput}>
          <label className={`${styles.labelText} ${styles.twoLineLabel}`}>
            <span className={`${styles.requiredField} ${styles.twoLineLabel}`}>Подтверждение пароля</span>
            <input type="password" className={styles.inputField}/>
          </label>
        </div>

        <div className={styles.enterRegistrationField}>
          <button className={styles.enterButton}>Регистрация</button>
          <NavigationLink className={styles.enterWithPassLink} hrefLink="/auth">Вход с паролем</NavigationLink>
          <NavigationLink className={styles.reg} hrefLink="/">Узнать о нас больше</NavigationLink>
        </div>
      </div>
    </div>
  );
};

RegistrationWindow.propTypes = {
  children: PropTypes.node,
}

export default RegistrationWindow;
