import React from 'react';
import LeftSideLayout from "components/LeftSideLayout";
import MainContentLayout from "components/MainContentLayout";
import Logo from 'components/Logo';
import LeftMenu from 'components/LeftMenu';
import RightLogBar from 'components/RightLogBar';
import RightSideLayout from 'components/RightSideLayout';


const ModelsPage = () => {
  return (
    <React.Fragment>
       <LeftSideLayout>
        <Logo />

        <LeftMenu />
      </LeftSideLayout>
      <MainContentLayout>Тут будет ModelsPage</MainContentLayout>
      <RightSideLayout>
        <RightLogBar />
      </RightSideLayout>

    </React.Fragment>
  )
};

export default ModelsPage;
