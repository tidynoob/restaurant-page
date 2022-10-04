import meow from './meow.jpg';

const loadHome = () => {
    const div = document.getElementById('content');
    const img = new Image();
    img.src = meow;
    const h1 = document.createElement('h1');
    h1.textContent = 'Meow Meows';
    const h2 = document.createElement('h2');
    h2.textContent = 'The Snackiest Snacks';
    const p = document.createElement('p');
    p.textContent = 'Our treats will keep you purring for more!';
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);
    div.classList.add('ui','container');

}

export default loadHome;