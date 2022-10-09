import meow from '../meow.jpg';
import clearContent from '../js/clearContent';
import appendToContent from '../js/appendToContent';
var fp = require('lodash/fp');

const div = document.getElementById('content');
const columnsDiv = document.createElement('div');
columnsDiv.classList.add('columns','box');
columnsDiv.id = 'home';

const imgDiv = document.createElement('div');
const img = new Image();
img.src = meow;
imgDiv.classList.add('column','image');
imgDiv.appendChild(img);

const divColumn = document.createElement('div');
divColumn.classList.add('column',);
const h1 = document.createElement('h1');
h1.classList.add('title');
h1.textContent = 'Meow Meows';
const h2 = document.createElement('h2');
h2.classList.add('subtitle');
h2.textContent = 'The Snackiest Snacks';
const p = document.createElement('p');
p.textContent = 'Our treats will keep you purring for more!';
divColumn.appendChild(h1);
divColumn.appendChild(h2);
divColumn.appendChild(p);

columnsDiv.appendChild(imgDiv);
columnsDiv.appendChild(divColumn);

const loadHome = () => {

    clearContent();
    fp.forEach(appendToContent)([columnsDiv]);
}

export default loadHome;