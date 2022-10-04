import './style.css';
import bootstrap from 'bootstrap';
import loadNav from './nav';
import loadHome from './loadHome';
import 'bootstrap/dist/css/bootstrap.min.css';

document.addEventListener('DOMContentLoaded', (e) => {
    loadNav();
    loadHome();
});