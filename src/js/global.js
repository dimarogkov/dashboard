// JS MENU
// ==============
// STORE
// INIT PAGE
// ==============

// STORE
import {store} from './store.js';
const {sections, state} = store;

const initPage = () => {
    console.log('JS load');
};

// INIT PAGE
document.addEventListener('DOMContentLoaded', initPage);
