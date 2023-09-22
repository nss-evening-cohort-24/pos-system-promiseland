import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
//   document.querySelector('#login-form-container').innerHTML = '';
  const domstring = `
    <div id="navigation"></div>
    <div id="main-container">
        <div id="buttons"></div>
        <div id="form-container"></div>
        <div id="orders"></div>
        <div id="item-list"></div>
        <div id="revenue-list"></div>
        <div id="view"></div>
        <div id="add-button"></div>
        <div id="payment-button"></div>
    </div>`;

  renderToDom('#app', domstring);
};

export default domBuilder;
