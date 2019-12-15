import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignInForm from './components/SignInForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} hideNavBar initial />
          <Scene key="signUp" component={SignInForm} title="Sign Up" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
