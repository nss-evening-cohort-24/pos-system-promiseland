import logoutButton from '../components/Buttons/logoutButton';
import domBuilder from '../components/Shared/domBuilder';
import domEvents from '../components/Events/domEvents';
import formEvents from '../components/Events/formEvents';
import navBar from '../components/Shared/navigationBar';
import navigationEvents from '../components/Events/navigationEvents';
import { emptyOrder, showOrder } from '../pages/order';
import { getOrder } from '../api/orderData';

const startApp = (user) => {
  domBuilder();
  domEvents(user);
  formEvents(user);
  logoutButton();
  navBar();
  navigationEvents(user);

  getOrder(user.uid).then((array) => {
    if (array.lenght) {
      showOrder(array);
    } else {
      emptyOrder();
    }
  });
};

export default startApp;
