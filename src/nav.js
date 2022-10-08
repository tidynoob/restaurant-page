// import logo from './cat.svg';
var fp = require('lodash/fp');

// Everything will be inserted before the content node
const content = document.getElementById('content');

// Create base nav bar
const nav = document.createElement('nav');
const navClasses = ['navbar'];
nav.classList.add(...navClasses);
nav.role = 'navigation';
nav.ariaLabel = 'Main navigation';

// Create container to limit width of nav bar
const navContainer = document.createElement('div');
const navContainerClasses = ['container', 'is-max-desktop'];
navContainer.classList.add(...navContainerClasses);

// Create navbar brand
const brand = document.createElement('div');
brand.classList.add('navbar-brand');
const aBrand = document.createElement('a');
aBrand.classList.add('navbar-item','title','mb-0');
aBrand.href = '#';
aBrand.textContent = 'Cat Cafe';
brand.appendChild(aBrand);

// Create navbar burger for touch devices
const burger = document.createElement('a');
burger.classList.add('navbar-burger');
burger.role = 'button';
burger.ariaLabel = 'menu';
burger.ariaExpanded = 'false';
burger.dataset.target = 'navbarMenu';
const span = document.createElement('span');
span.ariaHidden = 'true';
span.textContent = '';
burger.appendChild(span);
burger.appendChild(span.cloneNode(true));
burger.appendChild(span.cloneNode(true));
brand.appendChild(burger);

// create navbar menu
const menu = document.createElement('div');
menu.classList.add('navbar-menu');
menu.id = 'navbarMenu';

// create navbar start/end
const navStart = document.createElement('div');
navStart.classList.add('navbar-end');
const navItem = document.createElement('a');
navItem.classList.add('navbar-item');
navItem.textContent = 'Home';
navItem.id = 'homeButton';
navStart.appendChild(navItem.cloneNode(true));
navItem.textContent = 'Menu';
navItem.id = 'menuButton';
navStart.appendChild(navItem.cloneNode(true));
navItem.textContent = 'Contact';
navItem.id = 'contactButton';
navStart.appendChild(navItem.cloneNode(true));
menu.appendChild(navStart);

navContainer.appendChild(brand);
navContainer.appendChild(menu);

nav.appendChild(navContainer);

burger.addEventListener('click', (e) => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});

const bindInsert = fp.bind(content.parentNode.insertBefore)(content.parentNode);
const insertBeforeContent = fp.curryRight(bindInsert)(content);

const loadNav = () => {
    insertBeforeContent(nav);
}

export default loadNav;