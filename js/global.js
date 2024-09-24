// JS MENU
// ==============
// STORE
// ANIMATION AFTER LOADER
// SIDEBAR
// INIT PAGE
// ==============

// STORE
import {store} from './store.js';
const {elements} = store;

// ANIMATION AFTER LOADER
const initAnimation = () => {
    const loader = elements.loader;

    const init = () => document.body.classList.add('body--ready');

    loader.addEventListener('animationend', init);
};

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
    initAnimation();
    initSidebar();
};

// INIT PAGE
document.addEventListener('DOMContentLoaded', initPage);
