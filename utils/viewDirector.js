import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/Buttons/loginButton';
import startApp from './startApp';
import client from './client';
import logoutButton from '../components/Buttons/logoutButton';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
      logoutButton();
    } else {
      // person is NOT logged in
      // logo();
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
