// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const cardList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(card, deletedCard) {
    const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
    const cardTitle = cardItem.querySelector('.card__title');
    const cardImage = cardItem.querySelector('.card__image');
    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardTitle.textContent = card.name;
    cardItem.querySelector('.card__delete-button').addEventListener('click', function (){
        deletedCard(cardItem);
    });
    return cardItem;
}

// @todo: Функция удаления карточки

const deleteCard = function (card) {
        card.remove();
};

// @todo: Вывести карточки на страницу
initialCards.forEach((card) => {
    cardList.append(createCard(card, deleteCard))
});