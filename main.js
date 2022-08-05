const imageNames = [
  'img-1.png',
  'img-2.png',
  'img-3.png',
  'img-4.png',
  'img-5.png',
  'img-6.png',
  'img-7.png',
  'img-8.png',
];

let currentCard = '';
let previousCard = '';
let isActive = true;
let timesClicked = 0;
let timesMatched = 0;

const gameContainer = document.querySelector('[data-game]');
const gameMenu = document.querySelector('[data-menu]');
const cardGrid = document.querySelector('[data-grid]');

function getShuffledImages(imageNames, filePath) {
  return [...imageNames, ...imageNames]
    .sort(() => 0.5 - Math.random())
    .map((imageName) => ({
      imageName,
      src: `${filePath}/${imageName}`,
    }));
}

function createCard(cardDetails) {
  const cardElement = document.createElement('div');
  cardElement.innerHTML = `
	 <div class="game__card"
		data-is-opened="false"
		data-name="${cardDetails.imageName}"
		 >
			<div class="game__card-flipper">
			  <div class="game__card-front">
				 <span class="game__card-icon">?</span>
			  </div>
		  <div class="game__card-back">
			 <img src="${cardDetails.src}" alt="" class="game__card-image"
			 />
		  </div>
			</div>
	 </div>
	  `;
  return cardElement;
}

function initGame(imageNames, filePath, container) {
  const shuffledImages = getShuffledImages(imageNames, filePath);
  shuffledImages
    .map(createCard)
    .forEach((card) => addCard(card, container));
}

function addCard(cardElement, container) {
  container.appendChild(cardElement);
}

gameMenu.addEventListener('click', (event) => {
  if (event.target.dataset.button !== 'start') return;

  cardGrid.innerHTML = '';

  currentCard = '';
  previousCard = '';

  timesClicked = 0;
  timesMatched = 0;

  gameContainer.dataset.isActive = true;
  initGame(imageNames, './assets/images', cardGrid);
});

function clearVariables() {
  currentCard = '';
  previousCard = '';
}

function checkWin() {
  if (timesMatched !== 8) return;

  isActive = false;
  gameContainer.dataset.isActive = false;

  gameMenu.innerHTML = '';
  const successMessage = `
	<h1 class="game__menu-title">You win!</h1>
	<p class="game__menu-description">
	  You have made ${timesClicked} clicks.
	</p>
	<button class="game__menu-button" data-button="start">
	  Play Again
	</button>
	`;

  gameMenu.innerHTML = successMessage;
}

function handleClick(event) {
  if (isActive) {
    if (!event.target.closest('.game__card')) return;

    if (!currentCard) {
      timesClicked++;
      currentCard = event.target.closest('.game__card');
      currentCard.dataset.isOpened = true;
      return;
    }

    if (currentCard) {
      previousCard = event.target.closest('.game__card');
      previousCard.dataset.isOpened = true;
      isActive = false;

      if (currentCard.dataset.name === previousCard.dataset.name) {
        timesMatched++;
        checkWin();
        currentCard = '';
        previousCard = '';
        isActive = true;
        return;
      }

      if (currentCard.dataset.name !== previousCard.dataset.name) {
        setTimeout(() => {
          currentCard.dataset.isOpened = false;
          previousCard.dataset.isOpened = false;
          currentCard = '';
          previousCard = '';
          isActive = true;
          return;
        }, 1000);
      }
    }
  }
}

cardGrid.addEventListener('click', handleClick);
