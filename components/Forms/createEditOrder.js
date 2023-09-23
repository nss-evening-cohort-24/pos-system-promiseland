import renderToDom from '../../utils/renderToDom';
import clearDom from '../../utils/clearDom';

const createEditOrder = (obj = {}) => {
  clearDom();
  const domstring = `
    <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'
}" class="mb-4">
        <div class="form-group">
          <label for="orderName">Order Name</label>
          <input type="text" class="form-control" id="orderName" aria-describedby="orderName" placeholder="Enter Order Name" value="${
  obj.customerName || ''}" required>
        </div>
        <div class="form-group">
          <label for="customerPhone">Customer Phone</label>
          <input type="telephone" class="form-control" placeholder="Customer Phone" id="phone" style="height: 100px">${obj.phoneNumber || ''}</input>
        </div>
        <div class="form-group">
          <label for="customerEmail">Customer Email</label>
          <textarea class="form-control" placeholder="Customer Email" id="email" style="height: 100px">${obj.email || ''
}</textarea>
        </div>
        <div class="form-group">
        <label for="type">Order Type</label>
    <select class="form-control" id="orderType" required>
    <option value="">Select an Order Type</option>"${obj.orderType || ''}" required>
    <option value="phone">Phone</option>
    <option value="inPerson">In Person</option>
    </select>
        </div>
        <button type="submit" class="btn btn-primary">Create/Edit an Order</button>
      </form>
    `;

  renderToDom('#form-container', domstring);
};

export default createEditOrder;
