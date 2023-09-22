import { signIn } from '../../utils/auth';

document.querySelector('#app').innerHTML = `
<div class="text-center">
<img src="https://as1.ftcdn.net/v2/jpg/02/41/68/24/1000_F_241682449_NxVjPpkLc9vGY2dOTKENefJpgvdKxJJB.jpg" 
class="rounded-circle" alt="chicken">
</div>
`;
// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">Login to Get Started</button>';
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
