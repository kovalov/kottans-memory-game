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

gameContent.addEventListener('click', (event) => {
  if (!event.target.closest('.game__card')) return;

  currentSelectedCard =
    event.target.closest('.game__card').dataset.gameCardName;
  event.target.closest('.game__card').dataset.gameCardSelected =
    'opened';

  //   if (currentSelectedCard && previousSelectedCard) {
  //     //  currentSelectedCard = '';
  //     console.log('selected');
  //   }

  //   if (currentSelectedCard && !previousSelectedCard) {
  //     previousSelectedCard = currentSelectedCard;
  //   }

  //   console.log(
  //     `Current: ${currentSelectedCard} Previous:${previousSelectedCard}`
  //   );
});
