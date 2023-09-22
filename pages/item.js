import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyItems = () => {
  const domString = '<h1>No Items</h1>';
  renderToDom('#orders', domString);
};

const showItems = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-item-btn">Add an Item</button>';

  renderToDom('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
  <h5 class="card-name">${item.itemName}</h5>
  <h5 class="card-text">${item.itemPrice}</h5>
  <i class="btn btn-success fas fa-eye" id="edit-item-btn--${item.firebaseKey}"></i>
  <i class="btn btn-warning fas fa-eye" id="delete-btn--${item.firebaseKey}"></i>
  </div>
  </div>
  `;
  });
  renderToDom('#orders', domString);
};

export { showItems, emptyItems };
