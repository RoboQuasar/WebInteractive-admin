import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const RightSideLayout = ({ children }) => {
  return (
    <aside className={styles.rightSide}>{children}</aside>
  );
};

RightSideLayout.propTypes = {
  children: PropTypes.node,
}

export default RightSideLayout;
