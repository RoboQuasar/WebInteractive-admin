import React from 'react';
import MainContentLayout from "components/MainContentLayout";
import RegistrationWindow from 'components/RegistrationWindow';


const RegistrationPage = () => {
  return (
    <React.Fragment>
        <MainContentLayout>
          <RegistrationWindow />
        </MainContentLayout>
    </React.Fragment>
  )
};

export default RegistrationPage;
