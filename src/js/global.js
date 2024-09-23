// JS MENU
// ==============
// STORE
// INIT PAGE
// ==============

// STORE
import {store} from './store.js';
const {sections, state} = store;

// INIT PAGE
const initPage = () => {
    console.log('JS load');
};

// INIT PAGE
$(document).ready(() => initPage());
