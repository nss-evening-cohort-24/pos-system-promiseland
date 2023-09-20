import clearDom from "../utils/clearDom"
import renderToDom from "../utils/renderToDom";


const viewOrder = (obj) => {
    clearDom();

    const domString = `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div class="mt-5">
       <i id="edit-order-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-order-btn--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
     <div class="text-white ms-5 details">
     <h5>${obj.title} by ${obj.entryObject.title} ${obj.entryObject.category}</h5>
     <p>${obj.description || ''}</p>
     <hr>
  </div>
</div>`;

renderToDom('#view', domString);
};

export default viewOrder;