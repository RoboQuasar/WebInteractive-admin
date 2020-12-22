import React from 'react';
import LeftSideLayout from 'components/LeftSideLayout';
import NavMenu from 'components/LeftMenu';
import MainContentLayout from 'components/MainContentLayout';
import Logo from 'components/Logo';

const MainPage = () => {
  return (
    <React.Fragment>
      <LeftSideLayout>
        <Logo/>

        <NavMenu/>
      </LeftSideLayout>
      <MainContentLayout>Тут будет MainContent</MainContentLayout>
    </React.Fragment>
  );
}

export default MainPage;
