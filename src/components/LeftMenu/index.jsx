import React from 'react';
import NavLink from '../NavLink';

import styles from '../LeftMenu/LeftMenu.module.scss';
//Мне не нравится как тут прописан путь, но по другому компонент не видет файл стилей.

function NavMenu() {
    return (
        <div className={styles.navMenu}>
            <ul>
            <NavLink className = {styles.navLink} hrefLink = {"#"}><li>Виджеты</li></NavLink>
            <NavLink className = {styles.navLink} hrefLink = {"#"}><li>Элементы</li></NavLink>
            <NavLink className = {styles.navLink} hrefLink = {"#"}><li>Анимации<br />и эффекты</li></NavLink>
            {/* При переносе строки изза свойства "line-height" текст накладывается на нижний элемент списка. */}
            <NavLink className = {styles.navLink} hrefLink = {"#"}><li>3D Модели</li></NavLink>
            <NavLink className = {styles.navLink} hrefLink = {"#"}><li className = {styles.bottomLink}>Статистика</li></NavLink>
            <NavLink className = {styles.navLink} hrefLink = {"#"}><li className = {styles.bottomLink}>Помощь</li></NavLink>
            </ul>
        </div>
    )
}

export default NavMenu;
