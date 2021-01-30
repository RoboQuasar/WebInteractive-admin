import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

import UserIcon from 'components/UserIcon';
import LogoutIcon from 'components/LogoutIcon';
import NavigationLink from 'components/NavigationLink';

const RightLoginBar = () => {
  return (
    <ul className={styles.UlRightLoginBar}>
      <li className={styles.LiRightLoginBar}>
        <NavigationLink className={styles.link} hrefLink ="/auth">
          <UserIcon />
        </NavigationLink>
      </li>

      <li className={styles.LiRightLoginBar}>
        <NavigationLink className={styles.link} hrefLink ="/auth">
          <LogoutIcon />
        </NavigationLink>
      </li>

    </ul>
  );
};

RightLoginBar.propTypes = {
  children: PropTypes.node,
}

export default RightLoginBar;
