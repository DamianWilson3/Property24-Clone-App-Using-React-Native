import React, {Component} from 'react';

//import {Provider} from 'react-redux';
//import {createStore, applyMiddleware} from 'redux';
//import firebase from 'firebase';
//import ReduxThunk from 'redux-thunk';

//import LoginForm from './components/LoginForm';
import SignInForm from './components/SignInForm';
import Router from './Router';

class App extends Component {
  render() {
    return <Router />;
  }
}

export default App;
