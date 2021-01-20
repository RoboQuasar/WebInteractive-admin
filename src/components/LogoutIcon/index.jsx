import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as WebInteractiveUserIcon} from 'icons/logout_icon.svg';
//Ого, ты прям тут создал компонент <WebInteractiveLogo> с картинкой?

import styles from './styles.module.scss';


const LogoutIcon = () => {
  return (
    <div className={styles.imageContainer}>

      <WebInteractiveUserIcon />

    </div>
  );
};

LogoutIcon.propTypes = {
  children: PropTypes.node,
}

export default LogoutIcon;
