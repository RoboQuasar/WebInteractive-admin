import React from 'react';
import NavLink from '../NavLink';

import styles from '../LeftMenu/LeftMenu.module.scss';
import Widgets from 'pages/Widgets';
import AuthPage from 'pages/AuthPage';
import {
    BrowserRouter as Router,

  } from "react-router-dom";
//Мне не нравится как тут прописан путь, но по другому компонент не видет файл стилей.

//Компонент называется "LeftMenu", а Функция "NavMenu" не забыть переделать
function NavMenu() {
    return (
        <div className={styles.navMenu}>
            <ul>
                {/* <li><NavLink className = {styles.navLink} hrefLink = {"#"}>Виджеты</NavLink></li> */}
                <Router>
                <li><NavLink  Link={"/widgets"} LinkedComponent={Widgets}>Виджеты</NavLink></li>
                <li><NavLink  Link={"/Auth"} LinkedComponent={AuthPage}>Страница</NavLink></li>
                </Router>
                <li><NavLink className={styles.navLink} hrefLink={"#"}>Элементы</NavLink></li>
                <li><NavLink className={styles.navLink + " " + styles.twoLines} hrefLink={"#"}>Анимации и эффекты</NavLink></li>
                {/* При переносе строки изза свойства "line-height" текст накладывается на нижний элемент списка. */}
                <li><NavLink className={styles.navLink} hrefLink={"#"}>3D Модели</NavLink></li>
                <li className={styles.bottomLink}><NavLink className={styles.navLink} hrefLink={"#"}>Статистика</NavLink></li>
                <li className={styles.bottomLink}><NavLink className={styles.navLink} hrefLink={"#"}>Помощь</NavLink></li>
            </ul>
        </div>
    )
}

export default NavMenu;
