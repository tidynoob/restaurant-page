import clearContent from '../js/clearContent';
import appendToContent from '../js/appendToContent';
var fp = require('lodash/fp');

const foodItem = (name, description) => {
    const getName = () => name;
    const getDescription = () => description;
    return {getName, getDescription};
}

const food = [
    foodItem('Meow Mix', 'Your standard cat food.'),
    foodItem('Tuna', 'A can of tuna.'),
    foodItem('Catnip', 'A bag of catnip.'),
    foodItem('Tasty Treats', 'A bag of tasty treats.'),
]

const cardsDiv = document.createElement('div');
cardsDiv.id = 'cardsGrid';
// cardsDiv.classList.add('box');

food.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardHeader = document.createElement('header');
    cardHeader.classList.add('card-header');
    const cardHeaderTitle = document.createElement('p');
    cardHeaderTitle.classList.add('card-header-title');
    cardHeaderTitle.textContent = item.getName();
    cardHeader.appendChild(cardHeaderTitle);

    const cardDescription = document.createElement('div');
    cardDescription.classList.add('card-content');
    const cardDescriptionContent = document.createElement('p');
    cardDescriptionContent.classList.add('content');
    cardDescriptionContent.textContent = item.getDescription();
    cardDescription.appendChild(cardDescriptionContent);

    card.appendChild(cardHeader);
    card.appendChild(cardDescription);

    cardsDiv.appendChild(card);
});

const loadMenu = () => {

    clearContent();
    fp.forEach(appendToContent)([cardsDiv]);
}

export default loadMenu;