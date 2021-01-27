import React from 'react';
import LeftSideLayout from "components/LeftSideLayout";
import MainContentLayout from "components/MainContentLayout";
import Logo from 'components/Logo';
import LeftMenu from 'components/LeftMenu';
import RightSideLayout from 'components/RightSideLayout';
import RightLoginBar from 'components/RightLoginBar';

const ElementsPage = () => {
  return (
    <React.Fragment>
       <LeftSideLayout>
        <Logo />

        <LeftMenu />
      </LeftSideLayout>
      <MainContentLayout>Тут будет ElementsPage</MainContentLayout>
      <RightSideLayout>
        <RightLoginBar />
      </RightSideLayout>
    </React.Fragment>
  )
};

export default ElementsPage;
