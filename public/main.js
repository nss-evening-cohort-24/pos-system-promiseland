import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
  <div class="text-center">
  <img src="https://as1.ftcdn.net/v2/jpg/02/41/68/24/1000_F_241682449_NxVjPpkLc9vGY2dOTKENefJpgvdKxJJB.jpg" class="rounded-circle" alt="chicken">
  </div>
  `;

  ViewDirectorBasedOnUserAuthStatus();
};

init();
