import { deleteOrder, getOrder, getSingleOrder } from '../../api/orderData';
import createEditOrderForm from '../Forms/createEditOrder';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.icludes('delete-order-btn')) {
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ORDER', e.target.id);
        console.warn(e.target.id.split('--'));
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
      getSingleOrder(firebaseKey).then((orderObj) => createEditOrderForm(orderObj));
    }
  });
};

export default domEvents;
