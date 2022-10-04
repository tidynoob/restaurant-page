import logo from './cat.svg';


const loadNav = () => {
    const content = document.getElementById('content');

    const nav = document.createElement('nav');
    nav.classList.add('navbar', 'navbar-light' , 'bg-light');

    const container = document.createElement('div');
    container.classList.add('container-fluid');

    const a = document.createElement('a');
    a.classList.add('navbar-brand','d-flex','align-items-center','gap-1');
    a.href = '#';

    const myImg = new Image();
    myImg.src = logo;
    myImg.width = 30;
    myImg.classList.add('align-middle');

    const span = document.createElement('span');
    span.textContent = 'Cat Cafe';

    a.appendChild(myImg);
    a.appendChild(span);

    container.appendChild(a);
    nav.appendChild(container);
    content.parentNode.insertBefore(nav, content);

}

export default loadNav;