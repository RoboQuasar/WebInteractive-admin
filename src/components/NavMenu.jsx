import React from 'react';
import Nav_Button from './Nav_Button.jsx';

import styles from '../styles/navMenu.module.scss';


function NavMenu() {
    return (

        <div className={styles.navMenu}>
            <div className={styles.topNav}>
                <Nav_Button >Виджеты</Nav_Button>
                <Nav_Button >Элементы</Nav_Button>
                <Nav_Button >Анимации</Nav_Button>
                <Nav_Button >3D Модели</Nav_Button>
            </div>
            <div className={styles.bottomNav}>
                <Nav_Button>Статистика</Nav_Button>
                <Nav_Button>Помощь</Nav_Button>
            </div>
        </div>
    )
}

export default NavMenu;