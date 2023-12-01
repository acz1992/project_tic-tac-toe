const xClass = "x";
const circleClass = "circle";
const winningCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const winningMessageElement = document.getElementById("winning-message");
const restartButton = document.getElementById("restart-button");

const winningMessageTextElement = document.querySelector(
	"[data-winning-message-text]"
);
let circleTurn;

startGame();

restartButton.addEventListener("click", startGame);

function startGame() {
	circleTurn = false;
	cellElements.forEach((cell) => {
		cell.classList.remove(xClass);
		cell.classList.remove(circleClass);
		cell.removeEventListener("click", handleClick);
		cell.addEventListener("click", handleClick, { once: true });
	});
	setBoardHoverClass();
	winningMessageElement.classList.remove("show");
}

function handleClick(e) {
	const cell = e.target;
	// Place Marker
	const currentClass = circleTurn ? circleClass : xClass;
	placeMark(cell, currentClass);
	// Check win
	if (checkWin(currentClass)) {
		endGame(false);
		// Check draw
	} else if (isDraw()) {
		endGame(true);
		// Switch Turns
	} else {
		swapTurns();
		setBoardHoverClass();
	}
}

function endGame(draw) {
	if (draw) {
		winningMessageTextElement.innerText = "Draw!";
	} else {
		winningMessageTextElement.innerText = `${circleTurn ? "O" : "X"} Wins!`;
	}
	winningMessageElement.classList.add("show");
}

function isDraw() {
	return [...cellElements].every((cell) => {
		return (
			cell.classList.contains(xClass) ||
			cell.classList.contains(circleClass)
		);
	});
}

function placeMark(cell, currentClass) {
	cell.classList.add(currentClass);
}

function swapTurns() {
	circleTurn = !circleTurn;
}

function setBoardHoverClass() {
	board.classList.remove(xClass);
	board.classList.remove(circleClass);
	if (circleTurn) {
		board.classList.add(circleClass);
	} else {
		board.classList.add(xClass);
	}
}

function checkWin(currentClass) {
	return winningCombos.some((combination) => {
		return combination.every((index) => {
			return cellElements[index].classList.contains(currentClass);
		});
	});
}
