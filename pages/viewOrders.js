import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const viewOrders = (obj) => {
  clearDom();

  const domString = `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${obj.customerName}</h5>
    <h4 class="order-status">${obj.orderStatus}</h4>
    <h4 class="order-phoneNumber">${obj.phoneNumber}</h4>
    <h4 class="order-email">${obj.email}</h4>
    <h4 class="order-orderType">${obj.orderType}</h4>
    
    <div class="mt-5">
       <i id="detail-order-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="edit-order-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-order-btn--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
    </div>`;

  renderToDom('#view', domString);
};

export default viewOrders;
