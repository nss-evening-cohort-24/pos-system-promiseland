import navBar from '../components/Shared/navigationBar';

navBar();

const homeScreen = () => {
  document.querySelector('#app').innerHTML = `
  <h1>Welcome Dr. T!</h1>
  <button type="button" class="btn btn-success">View Orders</button>
  <button type="button" class="btn btn-info">Create an Order</button>
  <button type="button" class="btn btn-warning">View Revenue</button>
  `;
};

export default homeScreen;