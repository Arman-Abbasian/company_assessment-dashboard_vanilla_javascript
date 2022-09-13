import Router from './router.js';
import view from './view.js';
window.addEventListener("popstate",Router.router())
Router.router();