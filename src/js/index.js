import '../style.scss';
import loadNav from '../js/nav';
import loadHome from '../js/loadHome';
import loadMenu from '../js/loadMenu';

document.addEventListener('DOMContentLoaded', (e) => {
    loadNav();
    loadHome();

    const homeButton = document.getElementById('homeButton');
    homeButton.addEventListener('click', () => loadHome());

    const menuButton = document.getElementById('menuButton');
    menuButton.addEventListener('click', () => loadMenu());
    console.log('DOM fully loaded and parsed');

    const contactButton = document.getElementById('contactButton');
    
});