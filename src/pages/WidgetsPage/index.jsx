import React from 'react';
import LeftSideLayout from "components/LeftSideLayout";
import MainContentLayout from "components/MainContentLayout";
import Logo from 'components/Logo';
import NavMenu from 'components/LeftMenu';

import styles from '../WidgetsPage/Widgets.module.scss'

const Widgets = () => {
    return (
        <React.Fragment >
        {/* <h1 className = {styles.widgetsMenu}>nenen</h1> */}
        <LeftSideLayout>
         <Logo />

         <NavMenu className = {styles.widgetsMenu}/>
       </LeftSideLayout>
       <MainContentLayout>Тут будет WidgetsPage</MainContentLayout>
     </React.Fragment>
    )
};

export default Widgets;
