import logoutButton from '../components/Buttons/logoutButton';
import domBuilder from '../components/Shared/domBuilder';
import domEvents from '../components/Events/domEvents';
import formEvents from '../components/Events/formEvents';
import navBar from '../components/Shared/navigationBar';
import navigationEvents from '../components/Events/navigationEvents';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  logoutButton();
  navBar();
  navigationEvents(user);
};
export default startApp;
