const clearDom = () => {
  document.querySelector('#order-list').innerHTML = '';
  document.querySelector('#item-list').innerHTML = '';
  document.querySelector('#revenue-list').innerHTML = '';
  document.querySelector('#buttons').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#payment-button').innerHTML = '';
};

export default clearDom;
