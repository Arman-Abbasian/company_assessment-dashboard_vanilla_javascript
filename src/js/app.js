import Router from './router.js';
import view from './view.js';
import personnelPage from './pages/Personnel.js';
import netPage from './pages/Net.js';
import salePage from './pages/Sale.js';
class App{
    constructor(){
window.addEventListener("popstate",Router.router());
Router.router();
}
}