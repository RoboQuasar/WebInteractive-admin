import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as WebInteractiveUserIcon} from 'icons/user_icon.svg';
//Ого, ты прям тут создал компонент <WebInteractiveLogo> с картинкой?

import styles from './styles.module.scss';


const UserIcon = () => {
  return (
    <WebInteractiveUserIcon className={styles.imageContainer}/>
    //перенести стили с иконки на родительский тег
  );
};

UserIcon.propTypes = {
  children: PropTypes.node,
}

export default UserIcon;
