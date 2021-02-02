import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const ModalWindow = ({ children }) => {
  return (
    <div className={styles.ModalArea}>
      {/* Почему то не могу подхватить children.classname дочерним компонентом */}
      {/* <div className={children.className}> */}
      <div className={styles.ModalWindow}>
        {children}
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  
}

export default ModalWindow;
