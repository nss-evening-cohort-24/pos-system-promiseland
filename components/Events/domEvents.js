import { deleteOrder, getOrder, getSingleOrder } from '../../api/orderData';
import createEditOrder from '../Forms/createEditOrder';
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

    if (e.target.id.includes('create-orders')) {
      createEditOrder(user.uid);
    }

    if (e.target.id.includes('edit-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObj) => createEditOrder(user.uid, orderObj));
    }

    if (e.target.id.includes('detail-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderDetails(firebaseKey).then(viewOrder);
    }

    if (e.target.id.includes('view-orders')) {      
      getOrder(user.uid).then((array) => {
        if (array.length) {
          showOrder(array);
        } else {
          emptyOrder();
        }
      });
    }
  });
};

export default domEvents;
