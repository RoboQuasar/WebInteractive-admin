import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as WebInteractiveUserIcon} from 'icons/user icon.svg';
//Ого, ты прям тут создал компонент <WebInteractiveLogo> с картинкой?

import styles from './styles.module.scss';


const UserIcon = () => {
  return (
    <div className={styles.imageContainer}>
      
      <WebInteractiveUserIcon />
      
    </div>
  );
};

UserIcon.propTypes = {
  children: PropTypes.node,
}

export default UserIcon;
