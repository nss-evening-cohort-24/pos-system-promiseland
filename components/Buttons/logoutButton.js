import { signOut } from '../../utils/auth';
// import clearDom from '../../utils/clearDom';

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">LOGOUT</button>';
  document.querySelector('#logout-button').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signOut);
};

export default logoutButton;
