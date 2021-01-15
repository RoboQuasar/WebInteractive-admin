import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as WebInteractiveLogo} from 'icons/logo.svg';
//Ого, ты прям тут создал компонент <WebInteractiveLogo> с картинкой?

import styles from './styles.module.scss';
import NavLink from 'components/NavLink';

const Logo = () => {
  return (
    //подозреваю что тут много тегов и неясно, нужен ли NavLink именно тут.
    <div className={styles.imageContainer}>
      <NavLink hrefLink="/main">
      <WebInteractiveLogo />
      </NavLink>
    </div>
  );
};

Logo.propTypes = {
  children: PropTypes.node,
}

export default Logo;
