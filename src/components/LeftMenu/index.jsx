import React from 'react';
import NavLink from '../NavLink';

import styles from '../LeftMenu/LeftMenu.module.scss';

function NavMenu() {
    return (
                <ul className={styles.navMenu}>
                    <li><NavLink className={styles.navLink} hrefLink="/widgets">Виджеты</NavLink></li>
                    <li><NavLink className={styles.navLink} hrefLink="/elements">Элементы</NavLink></li>
                    <li><NavLink className={styles.navLink + " " + styles.twoLines} hrefLink="/effects">Анимации и эффекты</NavLink></li>
                    <li><NavLink className={styles.navLink} hrefLink="/models">3D Модели</NavLink></li>
                    
                    <li className={styles.bottomLink}><NavLink className={styles.navLink} hrefLink="/stat">Статистика</NavLink></li>
                    <li className={styles.bottomLink}><NavLink className={styles.navLink} hrefLink="/help">Помощь</NavLink></li>
                </ul>
            )
}

export default NavMenu;
