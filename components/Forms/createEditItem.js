import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const createEditItem = (obj = {}) => {
  clearDom();

  const domString = `
  <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
    <div class="form-group mb-3">
      <label for="itemName" class="form-label">Item Name</label>
      <input type="text" class="form-control" id="itemName" aria-describedby="orderName" placeholder="Item Name" value="${obj.itemName || ''}" required>
    </div>
   <div class="form-group mb-3">
      <label for="itemPrice" class="form-label">Price</label>
      <input type="text" class="form-control" id="itemPrice" aria-describedby="customerPhone" placeholder="Price $" value="${obj.itemPrice || ''}"  required>
    </div>
    <br>
    <button type="submit" class="btn btn-success">Create/Edit Order</button>
  </form>`;
  console.warn(domString);
  renderToDom('#form-container', domString);
};

export default createEditItem;
