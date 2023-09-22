import { deleteOrder, getOrder, getSingleOrder } from '../../api/orderData';
import createEditOrderF from '../Forms/createEditOrder';
import { showOrder } from '../../pages/order';

/* eslint-disable no-alert */
const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.icludes('delete-order-btn')) {
      if (window.confirm('Want to delete?')) {
        const splitArr = e.target.id.split('--');
        console.warn('splitArr', splitArr);
        const [, firebaseKey] = e.target.id.split('--');
        deleteOrder(firebaseKey)
          .then(() => getOrder(user.uid))
          .then((orders) => showOrder(orders));
      }
    }

    if (e.target.id.includes('edit-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObj) => createEditOrderF(orderObj));
    }
  });
};

export default domEvents;
