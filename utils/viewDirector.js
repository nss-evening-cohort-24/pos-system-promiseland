import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/Buttons/loginButton';
import client from './client';
import startApp from './startApp';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
    } else {
      // person is NOT logged in
      // logo();
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
