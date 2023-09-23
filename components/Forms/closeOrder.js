import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const closeOrders = (orderId, total) => {
  clearDom();

  const domString = `
  <div style="display:grid;"><h1>Revenue</h1>
  <form id="close-order-btn--${orderId}--${total}">
  <select class="form-select" id='payment-type' aria-label="Default Payment">
  <option selected>Payment Type</option>
  <option value="cash">Cash</option>
  <option value="credit">Credit</option>
  <option value="mobile">Mobile</option>
  </select>
  <div class="mb-4">
  <label for="Tip" class="form-label"></label>
  <input type="number" class="form-control" id="tip" aria-decribedby="tip" value="" placeholder="Tip Amount $">
  </div>
  <div>button type="submit" id="close-order-btn--${orderId}--${total}" class='btn-info">Close Order</button>
  </div>
  </form>  
  </div>;
  `;
  renderToDom('#form-container', domString);
};

export default closeOrders;
