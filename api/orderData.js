import client from '../utils/client';

const endpoint = client.databaseURL;

const getOrder = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Order.json?orderBy="id"&equlTo=${uid}"`, {
    method: 'GET',
    headers: {
      'Conten-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const deleteOrder = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Order/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'applicaiton/json'
    },
  }).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Order/${firebaseKey}.json`, {
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Order.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getOrder,
  deleteOrder,
  getSingleOrder,
  createOrder
};
