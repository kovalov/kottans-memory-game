export function createGameCard(cardDetails) {
  const cardElement = document.createElement('div');
  cardElement.innerHTML = `
  	<div class="game__card"
	  data-game-card-id="${cardDetails.id}"
	  data-game-card-status="closed"
	  data-game-card-selected="${cardDetails.isSelected}"
		>
  		<div class="game__card-flipper">
	 		<div class="game__card-front">
				<span class="game__card-icon">?</span>
	 		</div>
	 	<div class="game__card-back">
			<img src="${cardDetails.src}" alt="" class="game__card-image" />
	 	</div>
  		</div>
	</div>
	 `;
  return cardElement;
}
