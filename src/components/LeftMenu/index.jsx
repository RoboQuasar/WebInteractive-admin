import React from 'react';

import NavigationLink from '../NavigationLink';

import styles from '../LeftMenu/LeftMenu.module.scss';

function LeftMenu() {
  return (
    <ul className={styles.navMenu}>
      <li>
        <NavigationLink
          className={styles.navLink}
          activeClassName={styles.activeLink}
          hrefLink="/widgets"
        >
          Виджеты
        </NavigationLink>
      </li>

      <li>
        <NavigationLink
          className={styles.navLink}
          activeClassName={styles.activeLink}
          hrefLink="/elements"
        >
          Элементы
        </NavigationLink>
      </li>

      <li>
        <NavigationLink
          className={`${styles.navLink} ${styles.twoLines}`}
          activeClassName={styles.activeLink}
          hrefLink="/effects"
        >
          Анимации и эффекты
        </NavigationLink>
      </li>

      <li>
        <NavigationLink
          className={styles.navLink}
          activeClassName={styles.activeLink}
          hrefLink="/models"
          >
          3D Модели
        </NavigationLink>
      </li>

      <li className={styles.bottomLink}>
        <NavigationLink
          className={styles.navLink}
          activeClassName={styles.activeLink}
          hrefLink="/stat"
        >
          Статистика
        </NavigationLink>
      </li>

      <li className={styles.bottomLink}>
        <NavigationLink
          className={styles.navLink}
          activeClassName={styles.activeLink}
          hrefLink="/help"
        >
          Помощь
        </NavigationLink>
      </li>
    </ul>
  )
}

export default LeftMenu;
