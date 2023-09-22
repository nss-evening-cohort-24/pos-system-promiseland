import { signOut } from '../../utils/auth';
import { getOrder } from '../../api/orderData';
import { showOrder, emptyOrder } from '../../pages/order';
import { getItems } from '../../api/itemData';
import { emptyItems, showItems } from '../../pages/item';

const navigationEvents = (user) => {
  document.querySelector('#logout-button').addEventListener('click', signOut);
  document.querySelector('#show-order').addEventListener('click', () => {
    getOrder(user.uid).then(getOrder);
  });

  document.querySelector('#all-orders').addEventListener('click', () => {
    getOrder(user.uid).then((array) => {
      if (array.length) {
        showOrder(array);
      } else {
        emptyOrder();
      }
    });
  });

  document.querySelector('#item').addEventListener('click', () => {
    getItems(user.uid).then((array) => {
      if (array.length) {
        showItems(array);
      } else {
        emptyItems();
      }
    });
  });
};

export default navigationEvents;
