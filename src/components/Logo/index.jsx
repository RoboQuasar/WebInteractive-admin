import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as WebInteractiveLogo} from 'icons/logo.svg';

import styles from './styles.module.scss';

const Logo = () => {
  return (
    <div className={styles.imageContainer}>
      <WebInteractiveLogo />
    </div>
  );
};

Logo.propTypes = {
  children: PropTypes.node,
}

export default Logo;
