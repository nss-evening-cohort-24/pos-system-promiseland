import { createOrder, updateOrder, getOrder } from '../../api/orderData';
import { showOrder } from '../../pages/order';
import { createItems, getItems, updateItem } from '../../api/itemData';
import { showItems } from '../../pages/item';

function formEvents(user) {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-order')) {
      const payload = {
        customerName: document.querySelector('#customerName').value,
        phoneNumber: document.querySelector('#phoneNumber').value,
        email: document.querySelector('#email').value,
        price: document.querySelector('#price').value,
        orderType: document.querySelector('#orderType').value,
        uid: user.uid,
      };

      createOrder(payload).then(({ customerName }) => {
        const patchPayload = { firebaseKey: customerName };

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
        price: document.querySelector('#price').value,
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
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
        email: document.querySelector('#email').value,
        uid: user.uid
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
}

export default formEvents;
