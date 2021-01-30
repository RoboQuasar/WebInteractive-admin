import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as WebInteractiveUserIcon} from 'icons/logout_icon.svg';

import styles from './styles.module.scss';

const LogoutIcon = () => {
  return (
    <WebInteractiveUserIcon className={styles.imageContainer} />
  );
};

LogoutIcon.propTypes = {
  children: PropTypes.node,
}

export default LogoutIcon;
