export function createGameCard(cardDetails) {
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
