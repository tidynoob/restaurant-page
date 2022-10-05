import logo from './cat.svg';
var fp = require('lodash/fp');

const navClasses = ['navbar', 'py-3', 'mb-4', 'border-bottom'];
const containerClasses = ['container'];
const aClasses = ['navbar-brand', 'd-flex', 'align-items-center', 'gap-1'];
const imgClasses = ['align-middle'];
const spanClasses = ['fs-4'];
const ulClasses = ['nav','nav-pills','gap-3'];
const tabs = ['home','menu','contact'];
const tabClasses = ['nav-item'];
const content = document.getElementById('content');

const nav = document.createElement('nav');
nav.classList.add(...navClasses);

const container = document.createElement('div');
container.classList.add(...containerClasses);

const a = document.createElement('a');
a.classList.add(...aClasses);
a.href = '#';

const myImg = new Image();
myImg.src = logo;
myImg.classList.add(imgClasses);

const span = document.createElement('span');
span.classList.add(...spanClasses);
span.textContent = 'Cat Cafe';

a.appendChild(myImg);
a.appendChild(span);

const ul = document.createElement('ul');
ul.classList.add(...ulClasses);

tabs.forEach(tab => {
    // console.log(tab);
    const li = document.createElement('li');
    li.classList.add(...tabClasses);
    const a = document.createElement('a');
    if (tab === 'home') {
        a.classList.add('active','nav-link');
    }
    a.textContent = tab;
    a.href = '#';
    li.appendChild(a);
    ul.appendChild(li);
    // console.log(ul);
});

container.appendChild(a);
container.appendChild(ul);
nav.appendChild(container);

const bindInsert = fp.bind(content.parentNode.insertBefore)(content.parentNode);
const insertBeforeContent = fp.curryRight(bindInsert)(content);

const loadNav = () => {
    insertBeforeContent(nav);
}

export default loadNav;