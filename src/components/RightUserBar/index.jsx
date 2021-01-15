import React from 'react';
import PropTypes from 'prop-types';

//import styles from './styles.module.scss';
//когда возникнет необходимость, добавить в скобки функции {children}
const RightUserBar = () => {
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
