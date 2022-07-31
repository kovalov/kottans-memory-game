import { cardImages } from './cardImages.js';
import { getShuffledImages } from './getShuffledImages.js';
import { addGameCard } from './addGameCard.js';
import { createGameCard } from './createGameCard.js';

const gameContent = document.querySelector('[data-game-content]');

const cardImagePath = './assets/images';

const shuffledImages = getShuffledImages(cardImages, cardImagePath);

shuffledImages
  .map((item) => createGameCard(item))
  .forEach((card) => addGameCard(gameContent, card));

let currentSelectedCard = '';
let previousSelectedCard = '';
let isActive = true;

gameContent.addEventListener('click', (event) => {
  if (isActive) {
    if (!event.target.closest('.game__card')) return;

    const { gameCardName: cardName } =
      event.target.closest('.game__card').dataset;

    if (!currentSelectedCard) {
      currentSelectedCard = cardName;
      event.target.closest(
        '.game__card'
      ).dataset.gameCardIsOpened = true;
      return;
    }

    if (currentSelectedCard) {
      previousSelectedCard = currentSelectedCard;
      currentSelectedCard = cardName;
      event.target.closest(
        '.game__card'
      ).dataset.gameCardIsOpened = true;
      isActive = false;

      if (currentSelectedCard && previousSelectedCard) {
        if (currentSelectedCard !== previousSelectedCard) {
          setTimeout(() => {
            document.querySelector(
              `[data-game-card-name="${currentSelectedCard}"]`
            ).dataset.gameCardIsOpened = false;

            document.querySelector(
              `[data-game-card-name="${previousSelectedCard}"]`
            ).dataset.gameCardIsOpened = false;

            previousSelectedCard = '';
            currentSelectedCard = '';
            isActive = true;
          }, 1500);
        } else {
          previousSelectedCard = '';
          currentSelectedCard = '';
          isActive = true;
        }
      }
    }
  }
});
