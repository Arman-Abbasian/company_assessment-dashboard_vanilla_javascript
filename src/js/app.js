import Router from './router.js';
import view from './view.js';
import { personnelPage } from './pages/Personnel.js';
import Net from './pages/Net.js';
import Sale from './pages/Sale.js';
class App{
    constructor(){
window.addEventListener("popstate",Router.router());
Router.router();
}
}