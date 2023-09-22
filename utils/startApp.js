import { getOrder } from '../api/orderData';
import logoutButton from '../components/Buttons/logoutButton';
import domBuilder from '../components/Shared/domBuilder';
import navBar from '../components/Shared/navigationBar';
import domEvents from '../components/Events/domEvents';
import formEvents from '../components/Events/formEvents';
import navigationEvents from '../components/Events/navigationEvents';
import { emptyOrder, showOrder } from '../pages/order';

const startApp = (user) => {
  domBuilder();
  navBar();
  domEvents(user);
  formEvents(user);
  navigationEvents(user);
  logoutButton();

  getOrder(user.uid).then((array) => {
    if (array.length) {
      showOrder(array);
    } else {
      emptyOrder();
    }
  });
};

export default startApp;
