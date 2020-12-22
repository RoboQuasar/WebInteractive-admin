import React from 'react';
import LeftSideLayout from "components/LeftSideLayout";
import MainContentLayout from "components/MainContentLayout";

const ProfilePage = () => {
  return (
    <React.Fragment>
      <LeftSideLayout>Тут будет Лого и лефт-меню</LeftSideLayout>
      <MainContentLayout>Тут будет MainContent</MainContentLayout>
    </React.Fragment>
  )
};

export default ProfilePage;
