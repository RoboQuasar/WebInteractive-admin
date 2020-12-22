import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const LeftSideLayout = ({ children }) => {
  return (
    <aside className={styles.leftSide}>{children}</aside>
  );
};

LeftSideLayout.propTypes = {
  children: PropTypes.node,
}

export default LeftSideLayout;
