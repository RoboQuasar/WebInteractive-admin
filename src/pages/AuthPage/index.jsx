//import ModalWindow from 'components/ModalWindow';
import React from 'react';
import MainContentLayout from "components/MainContentLayout";
import AuthWindow from "components/AuthWindow"

const AuthPage = () => {
  return (
    <React.Fragment>
      <MainContentLayout>
        <AuthWindow></AuthWindow>
      </MainContentLayout>
    </React.Fragment>
  )
};

export default AuthPage;
