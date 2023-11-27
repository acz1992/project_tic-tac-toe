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
