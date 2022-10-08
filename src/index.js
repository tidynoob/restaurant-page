import './style.scss';
import loadNav from './nav';
import loadHome from './loadHome';

document.addEventListener('DOMContentLoaded', (e) => {
    loadNav();
    loadHome();
});