import './style.scss';
import loadNav from './nav';
import loadHome from './loadHome';

document.addEventListener('DOMContentLoaded', (e) => {
    loadNav();
    loadHome();

    const homeButton = document.getElementById('homeButton');
    homeButton.addEventListener('click', () => loadHome());

    const menuButton = document.getElementById('menuButton');
    // menuButton.addEventListener('click', () => loadMenu());

    const contactButton = document.getElementById('contactButton');
    
});