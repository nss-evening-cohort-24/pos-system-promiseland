import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyOrder = () => {
  const domString = '<h1>No Orders</h1>';
  renderToDom('#orders', domString);
};

const showOrder = (array) => {
  clearDom();

  let domString = '';
  if (!array.length) {
    domString += '<p>No Orders Found</p>';
  } else {
    array.forEach((item) => {
      domString += `
    <div class="card">
    <div class="card-body" style="height" 250px;">
    <div>
    <h5 class="card-title">${item.customerName}</h5>
    <p class="card-orderStatus">${item.orderStatus ? 'open' : 'closed'}</p>
    <p class="card-phoneNumber">${item.phoneNumber || ''}</p>
    <p class="card-email">${item.email || ''}</p>
    <p class="card-orderType">${item.isphone ? 'isphone' : 'walkin'}</p>
    <i id="detail-order-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info">Detail</i>
    <i id="edit-order-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info">Edit</i>
    <i id="delete-order-btn--${item.firebaseKey}" class="btn btn-danger btn-info">Delete</i>
    </div>
    </div>
    </div>`;
    });
  }
  renderToDom('#orders', domString);
};

export { showOrder, emptyOrder };
