import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/navMenu.module.scss';


function NavButton(props) {
    return (
        <div className={styles.navButton}>
            <div>{props.children}</div>
        </div>
    )
}

NavButton.propTypes = {
    // ...prop type definitions here
    children: PropTypes.string
  }


export default NavButton;