console.log("Up and running!");

var cards = ["Queen", "Queen", "King", "King"];

var cardsInPlay = [];

var cardOne = cards[0];
	cardsInPlay.push('cardOne');

console.log("User flipped Queen");

var cardTwo = cards[2];
	cardsInPlay.push('cardTwo');

console.log("User flipped King");


	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
	} 
		else {
			alert("Sorry, try again.");
		}
	}
	

