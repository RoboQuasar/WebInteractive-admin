import React from 'react';
import LeftSideLayout from 'components/LeftSideLayout';
import LeftMenu from 'components/LeftMenu';
import MainContentLayout from 'components/MainContentLayout';
import Logo from 'components/Logo';
import RightSideLayout from 'components/RightSideLayout';
import RightMainBar from 'components/RightMainBar';

const MainPage = () => {
  return (
    <React.Fragment>
      <LeftSideLayout>
        <Logo/>

        <LeftMenu/>
      </LeftSideLayout>
      <MainContentLayout>Тут будет MainContent</MainContentLayout>
      <RightSideLayout>
        <RightMainBar />
      </RightSideLayout>
    </React.Fragment>
  );
}

export default MainPage;
