const gameContent = document.querySelector('[data-game-content]');

const cardImages = [
  'img-1.png',
  'img-2.png',
  'img-3.png',
  'img-4.png',
  'img-5.png',
  'img-6.png',
  'img-7.png',
  'img-8.png',
];

const cardImagePath = './assets/images';

const shuffledImages = [...cardImages, ...cardImages]
  .sort(() => 0.5 - Math.random())
  .map((imageName, index) => ({
    id: index,
    isSelected: false,
    src: `${cardImagePath}/${imageName}`,
  }));

function createGameCard(cardDetails) {
  const cardElement = document.createElement('div');
  cardElement.innerHTML = `
		<div class="game__card"
		data-game-card-id="${cardDetails.id}"
		data-game-card-status="closed"
		data-game-card-selected="${cardDetails.isSelected}"
		>
			<img
	  		src="${cardDetails.src}"
	 		alt=""
	  		class="game__card-image"
		/>
 		</div>
	`;
  return cardElement;
}

function addGameCard(container, cardElement) {
  return container.appendChild(cardElement);
}

const cards = shuffledImages
  .map((item) => createGameCard(item))
  .forEach((card) => addGameCard(gameContent, card));
