import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domstring = `
    <div id="navigation"></div>
    <div id="main-container">
        <div id="buttons"></div>
        <div id="form-container"></div>
        <div id="orders"></div>
        <div id="payment-button"></div>        
        <div id="item-list"></div>
        <div id="revenue-list"></div>
        <div id="view"></div>
        
    </div>`;

  renderToDom('#app', domstring);
};

export default domBuilder;
