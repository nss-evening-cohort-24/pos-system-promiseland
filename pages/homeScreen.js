import renderToDom from '../utils/renderToDom';

const homeScreen = (user) => {
  let domString = '';

  domString += `<h1> Welcome ${user.displayName} !</h1>
  <div class="button-row">
    <button type="button" id='view-orders' class"btn btn-success">View Orders</button>
    <button type="button"  id='create-orders' class="btn btn-info">Create An Order</button>
    <button type="button" id='view-revenue' class= btn-warning">View Revenue</button>
  </div>`;
  renderToDom('#buttons', domString);
};

export default homeScreen;
