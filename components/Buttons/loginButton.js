import { signIn } from '../../utils/auth';

// const logo = '<image src="/components/images/205346767-a182560c-64a6-4cfa-80b3-0d64cf998242.png"></image>';
// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">Login to Get Started</button>';
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
