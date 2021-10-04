import React from 'react';
import { Redirect } from 'react-router';

import LeftSideLayout from 'components/LeftSideLayout';
import LeftMenu from 'components/LeftMenu';
import MainContentLayout from 'components/MainContentLayout';
import Logo from 'components/Logo';
import RightSideLayout from 'components/RightSideLayout';
import RightMainBar from 'components/RightMainBar';

import UserLoginInfoContext from 'react_context/UserLoginInfoContext';

const MainPage = () => {
  return (

    <UserLoginInfoContext.Consumer>
      {isLogged => {
        return (
          <React.Fragment>

            <LeftSideLayout>
              <Logo />

              <LeftMenu />
            </LeftSideLayout>
            <MainContentLayout>Тут будет MainContent</MainContentLayout>
            <RightSideLayout>
              <RightMainBar />
            </RightSideLayout>
            {isLogged[0] || <Redirect to="/auth" />}
          </React.Fragment>

        )
      }
      }
    </UserLoginInfoContext.Consumer>
  );
}

export default MainPage;
