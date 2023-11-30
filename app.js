// Create Grid IIFE
const createGrid = (function () {
	let grid = [];

	function renderGrid() {
		for (let row = 0; row < 3; row++) {
			let rowArray = [];
			for (let col = 0; col < 3; col++) {
				rowArray.push(`${row * 3 + col}`);
			}
			grid.push(rowArray);
		}
		return grid;
	}

	return {
		renderGrid,
	};
})();

// Create Player Factory Function
const Player = function (name, marker) {
	return {
		name,
		marker,
	};
};

// Create Game Logic

const gameLogic = (function () {
	// Create Players
	// Designate Markers
	// Start Game
	// Game round
	// if statements - if player 1 go false, function player 2 goes
	// store positions function
	// start with empty array
	// save selected position
})();
