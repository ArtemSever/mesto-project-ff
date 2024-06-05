// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const cardList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(cards, deletedCard) {
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    const cardTitle = card.querySelector('.card__title');
    const cardImage = card.querySelector('.card__image');
    cardImage.src = cards.link;
    cardImage.alt = cards.name;
    cardTitle.textContent = cards.name;
    deletedCard(card)
    return card;
}

// @todo: Функция удаления карточки

const deleteCard = function (card) {
    const cardButtonDelete = card.querySelector('.card__delete-button');
    cardButtonDelete.addEventListener('click', function () {
        card.remove();
    });
};

// @todo: Вывести карточки на страницу
initialCards.forEach((card) => {
    cardList.append(createCard(card, deleteCard))
});