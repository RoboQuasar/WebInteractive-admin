import React from 'react';
import LeftSideLayout from "components/LeftSideLayout";
import MainContentLayout from "components/MainContentLayout";
import LeftMenu from 'components/LeftMenu';
import Logo from 'components/Logo';

const AuthPage = () => {
  return (
    <React.Fragment>
      <LeftSideLayout>
        <Logo />
        <LeftMenu />
      </LeftSideLayout>
      <MainContentLayout>Тут будет MainContent</MainContentLayout>
    </React.Fragment>
  )
};

export default AuthPage;
