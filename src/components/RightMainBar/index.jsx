import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

import NavigationLink from 'components/NavigationLink';
import avatar from '../../images/Avatar.jpg'

const RightMainBar = () => {
  return (
    <ul className={styles.UlRightMainBar}>
      <li>
      <img alt="avatar" src={avatar} className={styles.Avatar}></img>
      </li>

      <li className={styles.Name}>
        Имя
      </li>

      <li className={styles.SecondName}>
        Фамилия
      </li>

      <li className={styles.Rate}>
        Тариф
      </li>

      <li className={styles.Remainder}>
        Остаток срока <br/>подписки
      </li>

      <li className={styles.ProfileLink}>
        <NavigationLink className={styles.RightMainLink} hrefLink="/">
          Мой профиль
        </NavigationLink>
      </li>

      <li>
        <NavigationLink className={styles.RightMainLink} hrefLink="/">
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
