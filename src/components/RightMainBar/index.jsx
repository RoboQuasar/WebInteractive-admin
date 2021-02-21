import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

import NavigationLink from 'components/NavigationLink';
import avatar from '../../images/Avatar.jpg'

const RightMainBar = () => {
  return (
    <ul className={styles.loginBarList}>
      <li className={styles.avatarList}>
      <img alt="avatar" src={avatar} className={styles.avatar}></img>
      </li>

      <li className={styles.name}>
        Имя
      </li>

      <li className={styles.secondName}>
        Фамилия
      </li>

      <li className={styles.rate}>
        Тариф
      </li>

      <li className={styles.remainder}>
        Остаток срока <br/>подписки
      </li>

      <li className={styles.profileLink}>
        <NavigationLink className={styles.rightMainLink} hrefLink="/profile">
          Мой профиль
        </NavigationLink>
      </li>

      <li>
        <NavigationLink className={styles.rightMainLink} hrefLink="/">
          Выйти
        </NavigationLink>
      </li>
    </ul>
  );
};

RightMainBar.propTypes = {
  children: PropTypes.node,
}

export default RightMainBar;
