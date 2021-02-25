import React from 'react';
import PropTypes from 'prop-types';
import {
       NavLink
  } from "react-router-dom";

import styles from './styles.module.scss';

function DefaultLink(props) {
    return (
        <NavLink
          className={`${props.className} ${styles.defaultLink}`}
          to = {props.hrefLink}>
            {props.children}
        </NavLink>
        )
}

DefaultLink.propTypes = {
    children: PropTypes.node,
    className: PropTypes.node,
    hrefLink: PropTypes.node,
  }

  export default DefaultLink;
