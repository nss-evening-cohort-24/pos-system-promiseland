import { deleteSingleItem, getOrderItems, getSingleItem } from './itemData';
import { deleteOrder, getSingleOrder } from './orderData';

const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey).then((orderObj) => {
    getSingleItem(orderObj.id).then((itemObj) => {
      resolve({ ...orderObj, itemObj });
    });
  }).catch(reject);
});

const getItemDetails = async (firebaseKey) => {
  const item = await getSingleItem(firebaseKey);
  const order = await getOrderItems(item.firebaseKey);

  return { ...item, order };
};

const deleteItemOrderRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getOrderItems(firebaseKey).then((itemOrderArray) => {
    const deleteOrderPromises = itemOrderArray.map((order) => deleteOrder(order.firebasekey));

    Promise.all(deleteOrderPromises).then(() => {
      deleteSingleItem(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export {
  getOrderDetails,
  getItemDetails,
  deleteItemOrderRelationship
};
