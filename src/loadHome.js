import meow from './meow.jpg';
var fp = require('lodash/fp');

const div = document.getElementById('content');
div.classList.add('ui','container');
const img = new Image();
img.src = meow;
const h1 = document.createElement('h1');
h1.textContent = 'Meow Meows';
const h2 = document.createElement('h2');
h2.textContent = 'The Snackiest Snacks';
const p = document.createElement('p');
p.textContent = 'Our treats will keep you purring for more!';

const appendToDiv = fp.bind(div.appendChild)(div);

const loadHome = () => {

    fp.forEach(appendToDiv)([img,h1, h2, p]);
}

export default loadHome;