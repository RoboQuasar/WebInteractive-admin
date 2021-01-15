import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import ModalWindow from 'components/ModalWindow';

const AuthModalWindow = ({ children }) => {
  return (
    <ModalWindow className = {styles.AuthModalWindow} />
  );
};

AuthModalWindow.propTypes = {
  children: PropTypes.node,
}

export default AuthModalWindow;
