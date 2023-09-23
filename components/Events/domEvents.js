import { deleteOrder, getOrder, getSingleOrder } from '../../api/orderData';
import createEditOrderForm from '../Forms/createEditOrder';
import { showOrder } from '../../pages/order';
import viewOrder from '../../pages/viewOrders';
import { getOrderDetails } from '../../api/mergedData';

/* eslint-disable no-alert */
const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    /* eslint-disable */
    if (e.target.id.includes('delete-order-btn')) {
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteOrder(firebaseKey).then(getOrder).then(showOrder);
      }
    }

    if (e.target.id.includes('add-order-btn')) {
      createEditOrderForm(user.uid);
    }

    if (e.target.id.includes('edit-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObj) => createEditOrderForm(user.uid, orderObj));
    }

    if (e.target.id.includes('view-orders-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderDetails(firebaseKey).then(viewOrder);
    }
    getOrder(user.uid).then((array) => {
        if (array.length) {
          showOrder(array);
        } else {
          emptyOrder();
        }
      });
  });
};

export default domEvents;
