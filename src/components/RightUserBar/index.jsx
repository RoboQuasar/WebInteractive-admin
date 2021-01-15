import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const RightUserBar = ({ children }) => {
  return (
    <ul>
      тут будет панель пользователя
    </ul>
  );
};

RightUserBar.propTypes = {
  children: PropTypes.node,
}

export default RightUserBar;
