import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

import UserIcon from 'components/UserIcon';

import LogoutIcon from 'components/LogoutIcon';
import NavigationLink from 'components/NavigationLink';

//Какие дочерние компоненты принимает эта функция?
const RightLogBar = () => {
  return (
    <ul className={styles.rightLogBar}>
      <li><NavigationLink strict hrefLink ="/auth"><UserIcon /></NavigationLink></li>
      <li><NavigationLink hrefLink ="/auth"><LogoutIcon /></NavigationLink></li>

    </ul>
  );
};

RightLogBar.propTypes = {
  children: PropTypes.node,
}

export default RightLogBar;
