// import { getOrder } from '../api/orderData';
import logoutButton from '../components/Buttons/logoutButton';
import domBuilder from '../components/Shared/domBuilder';
import navBar from '../components/Shared/navigationBar';
import domEvents from '../components/Events/domEvents';
import formEvents from '../components/Events/formEvents';
import navigationEvents from '../components/Events/navigationEvents';
import homeScreen from '../pages/homeScreen';
// import { emptyOrder, showOrder } from '../pages/order';

const startApp = (user) => {
  domBuilder(user);
  navBar(user);
  homeScreen(user);
  domEvents(user);
  formEvents(user);
  navigationEvents(user);
  logoutButton();
};

export default startApp;
