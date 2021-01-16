import React from 'react';
import LeftSideLayout from "components/LeftSideLayout";
import MainContentLayout from "components/MainContentLayout";
import Logo from 'components/Logo';
import LeftMenu from 'components/LeftMenu';

const StatPage = () => {
  return (
    <React.Fragment>
       <LeftSideLayout>
        <Logo />

        <LeftMenu />
      </LeftSideLayout>
      <MainContentLayout>Тут будет StatPage</MainContentLayout>
    </React.Fragment>
  )
};

export default StatPage;
