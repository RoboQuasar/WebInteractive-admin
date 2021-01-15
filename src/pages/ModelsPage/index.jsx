import React from 'react';
import LeftSideLayout from "components/LeftSideLayout";
import MainContentLayout from "components/MainContentLayout";
import Logo from 'components/Logo';
import NavMenu from 'components/LeftMenu';
import RightSideLayout from 'components/RightSideLayout';
//import LogoutIcon from 'components/LogoutIcon';
//import UserIcon from 'components/UserIcon';
import RightLogBar from 'components/RightLogBar';

const ModelsPage = () => {
  return (
    <React.Fragment>
       <LeftSideLayout>
        <Logo />
        
        <NavMenu />
      </LeftSideLayout>
      <MainContentLayout>Тут будет ModelsPage</MainContentLayout>
      <RightSideLayout>
        <RightLogBar />
        
      </RightSideLayout>
    </React.Fragment>
  )
};

export default ModelsPage;
