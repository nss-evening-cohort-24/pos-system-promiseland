import renderToDom from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
        <a id="main-page" class="navbar-brand title" href="#"><img id="navb-logo" src="https://user-images.githubusercontent.com/29741570/205346767-a182560c-64a6-4cfa-80b3-0d64cf998242.png"</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
             <a class="nav-link" href="#" id="view-orders">View Orders   <span class="sr-only">(current)</span>
             </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#" id="create-orders">   Create an Order <span class="sr-only">(current)</span>
              </a>
            </li>
            </ul>
           <div id="logout-button"></div>
          </span>
        </div>
        </div>
      </nav>`;

  renderToDom('#navigation', domString);
};

export default navBar;
