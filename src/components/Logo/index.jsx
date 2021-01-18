import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as WebInteractiveLogo} from 'icons/logo.svg';
import NavigationLink from 'components/NavigationLink';

import styles from './styles.module.scss';


const Logo = () => {
  return (
    <div className={styles.imageContainer}>
      <NavigationLink hrefLink="/main">
        <WebInteractiveLogo />
      </NavigationLink>
    </div>
  );
};

Logo.propTypes = {
  children: PropTypes.node,
}

export default Logo;
