import React from 'react';

import NavigLink from '../NavLink';

import styles from '../LeftMenu/LeftMenu.module.scss';

function NavMenu() {
    return (
                <ul className={styles.navMenu}>

                    <li ><NavigLink className={styles.navLink} activeClassName={styles.activeLink} hrefLink ="/widgets">
                        Виджеты
                        </NavigLink></li>

                    <li><NavigLink className={styles.navLink} activeClassName={styles.activeLink} hrefLink="/elements">
                        Элементы
                        </NavigLink></li>

                    <li><NavigLink className={`${styles.navLink} ${styles.twoLines}`} activeClassName={styles.activeLink} hrefLink="/effects">
                        Анимации и эффекты
                        </NavigLink></li>

                    <li><NavigLink className={styles.navLink} activeClassName={styles.activeLink} hrefLink="/models">
                        3D Модели
                        </NavigLink></li>

                    <li className={styles.bottomLink}><NavigLink className={styles.navLink} activeClassName={styles.activeLink} hrefLink="/stat">
                        Статистика
                        </NavigLink></li>

                    <li className={styles.bottomLink}><NavigLink className={styles.navLink} activeClassName={styles.activeLink} hrefLink="/help">
                        Помощь
                        </NavigLink></li>
                </ul>
            )
}

export default NavMenu;
