import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

import UserIcon from 'components/UserIcon';
import NavigLink from 'components/NavLink';
import LogoutIcon from 'components/LogoutIcon';

//Какие дочерние компоненты принимает эта функция?
const RightLogBar = () => {
  return (
    <ul className={styles.rightLogBar}>
      <li><NavigLink strict hrefLink ="/auth"><UserIcon /></NavigLink></li>
      <li><NavigLink hrefLink ="/auth"><LogoutIcon /></NavigLink></li>
    </ul>
  );
};

RightLogBar.propTypes = {
  children: PropTypes.node,
}

export default RightLogBar;
