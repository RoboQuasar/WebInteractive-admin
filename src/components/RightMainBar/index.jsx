import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';



import Avatar from 'react-avatar';
import NavigationLink from 'components/NavigationLink';

const RightMainBar = () => {
  return (
    <ul className={styles.RightMainBar}>
      <li>
      {/* https://www.npmjs.com/package/react-avatar */}
      <Avatar
        className={styles.UserAvatar}
        round={true}
        size="75"
        >
      </Avatar>
      </li>

      <li>
        <p>Имя</p>
        <p>Фамилия</p>
      </li>

      <li>
        <NavigationLink hrefLink="/">
          Тариф
        </NavigationLink>
      </li>

      <li>
      <NavigationLink hrefLink="/">
          Остаток срока <br/>подписки
        </NavigationLink>
      </li>

      <li>
      <NavigationLink hrefLink="/">
          Мой профиль
        </NavigationLink>
      </li>

      <li>
      <NavigationLink hrefLink="/">
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
