import { createOrder, getOrder, updateOrder } from '../../api/orderData';
import { createItems, getItems, updateItem } from '../../api/itemData';
import { showOrder } from '../../pages/order';
import { showItems } from '../../pages/item';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-order')) {
      const payload = {
        customerName: document.querySelector('#customerName').value,
        phoneNumber: document.querySelector('#phoneNumber').value,
        email: document.querySelector('#email').value,
        orderType: document.querySelector('#orderType').value,
        uid: user.uid,
      };

      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrder(patchPayload).then(() => {
          getOrder(user.uid).then(showOrder);
        });
      });
    }

    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        customerName: document.querySelector('#customerName').value,
        phoneNumber: document.querySelector('#phoneNumber').value,
        email: document.querySelector('#email').value,
        orderType: document.querySelector('#orderType').value,
        uid: user.uid,
        firebaseKey,
      };

      updateOrder(payload).then(() => {
        getOrder(user.uid).then(showOrder);
      });
    }

    if (e.target.id.includes('submit-item')) {
      const payload = {
        itemName: document.querySelector('#itemName').value,
        itemPrice: document.querySelector('#itemPrice').value,
        uid: user.uid,
      };

      createItems(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateItem(patchPayload).then(() => {
          getItems(user.uid).then(showItems);
        });
      });
    }

    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        itemName: document.querySelector('#itemName').value,
        lastPrice: document.querySelector('#itemPrice').value,
        uid: user.uid,
        firebaseKey,
      };

      updateItem(payload).then(() => {
        getItems(user.uid).then(showItems);
      });
    }
  });
};

export default formEvents;
