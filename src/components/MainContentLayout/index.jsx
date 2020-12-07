import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const MainContentLayout = ({ children }) => {
  return (
    <section className={styles.mainContent}>{children}</section>
  );
};

MainContentLayout.propTypes = {
  children: PropTypes.node,
}

export default MainContentLayout;
