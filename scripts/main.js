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

gameContent.addEventListener('click', (event) => {
  const selectedCard = event.target;
  selectedCard.closest('.game__card').dataset.gameCardSelected =
    'opened';
});
