// JS MENU
// ==============
// STORE
// SIDEBAR
// INIT PAGE
// ==============

// STORE
import {store} from './store.js';
const {elements, state} = store;

// SIDEBAR
const initSidebar = () => {
    const sidebar = elements.sidebar;
    const burgerBtn = sidebar.querySelector('.sidebar__burger');
    const layer = sidebar.querySelector('.sidebar__layer');

    const toggleSidebar = () => {
        document.body.classList.toggle('body--lock');
        sidebar.classList.toggle('sidebar--open-menu');
    };

    const closeSidebar = () => {
        document.body.classList.remove('body--lock');
        sidebar.classList.remove('sidebar--open-menu');
    };

    burgerBtn.addEventListener('click', toggleSidebar);
    layer.addEventListener('click', closeSidebar);
};

const initPage = () => {
    initSidebar();
};

// INIT PAGE
document.addEventListener('DOMContentLoaded', initPage);
