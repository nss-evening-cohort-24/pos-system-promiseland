import { signOut } from '../../utils/auth';
import { getOrder } from '../../api/orderData';
import { emptyOrder, showOrder } from '../../pages/order';
import createEditOrder from '../Forms/createEditOrder';

const navigationEvents = (user) => {
  document.querySelector('#logout-button').addEventListener('click', signOut);
  document.querySelector('#view-orders').addEventListener('click', () => {
    getOrder(user.uid).then((array) => {
      if (array.length) {
        showOrder(array);
      } else {
        emptyOrder();
      }
    });
  });
  document.querySelector('#create-orders').addEventListener('click', () => {
    createEditOrder();
  });
};

export default navigationEvents;
