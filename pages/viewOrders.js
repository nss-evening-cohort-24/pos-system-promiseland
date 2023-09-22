import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const viewOrder = (obj) => {
  clearDom();

  const domString = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="customer-name">${obj.customerName}</h5>
        <h5 class="order-status">${obj.orderStatus}</h5>
        <h5 class="customer-phone-number">${obj.phoneNumber}</h5>
        <h5 class="customer-email-address">${obj.email}</h5>
        <h5 class="order-type">${obj.orderType}</h5>
          <div class="mt-5">
            <i id="edit-order-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="edit-order-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-order-btn--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
          </div>
      </div>
    </div>`;

  renderToDom('#view', domString);
};

export default viewOrder;
